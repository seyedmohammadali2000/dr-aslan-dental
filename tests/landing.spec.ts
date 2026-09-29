import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.beforeEach(async ({ page }) => {
  // The external map is verified by URL; Google's UI and network are outside this app.
  await page.route("https://www.google.com/maps/embed?*", (route) =>
    route.fulfill({
      status: 200,
      contentType: "text/html",
      body: "<html lang='en'><title>Map</title><body>Map</body></html>",
    }),
  );
});

test("Arabic metadata, clinic identity and booking destinations", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect(page.locator("html")).toHaveAttribute("lang", "ar-IQ");
  await expect(page).toHaveTitle(/كربلاء/);
  await expect(page.locator("h1")).toHaveCount(1);
  const data = JSON.parse(
    await page.locator('script[type="application/ld+json"]').innerText(),
  );
  expect(data.telephone).toBe("+9647729035702");
  expect(data.sameAs).toContain("https://www.instagram.com/xxaslanxx");
  const bookingLinks = await page
    .locator('a[href*="wa.me"]')
    .evaluateAll((links) =>
      links.map((link) => (link as HTMLAnchorElement).href),
    );
  expect(bookingLinks.length).toBeGreaterThan(6);
  for (const link of bookingLinks) {
    const url = new URL(link);
    expect(url.pathname).toBe("/9647729035702");
    expect(url.searchParams.get("text")).toBeTruthy();
  }
  await expect(page.locator('iframe[title*="كربلاء"]')).toHaveAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d294.2443001441524!2d44.01011601774608!3d32.609186348697236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2siq!4v1790702453601!5m2!1sen!2siq",
  );
  const brokenAnchors = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .filter(
          (link) =>
            !document.getElementById(link.getAttribute("href")!.slice(1)),
        )
        .map((link) => link.getAttribute("href")),
    );
  expect(brokenAnchors).toEqual([]);
  expect(errors).toEqual([]);
});

test("responsive layouts, mobile navigation and FAQ", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  for (const width of [320, 375, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow, `No horizontal overflow at ${width}px`).toBe(false);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "فتح القائمة" }).click();
  await expect(page.locator("#mobile-menu")).toBeVisible();
  await page
    .locator("#mobile-menu")
    .getByRole("link", { name: "خدماتنا" })
    .click();
  await expect(page.locator("#mobile-menu")).toHaveCount(0);
  await expect(page).toHaveURL(/#services$/);
  await page.getByRole("button", { name: "فتح القائمة" }).click();
  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-menu")).toHaveCount(0);
  await page.locator("summary").first().click();
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
  await expect(page.locator(".mobile-booking-bar")).toBeVisible();
});

test("WCAG accessibility and desktop/mobile visual captures", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  for (const viewport of [
    { width: 1440, height: 1000 },
    { width: 390, height: 844 },
  ]) {
    await page.setViewportSize(viewport);
    await page.screenshot({
      path: `test-results/landing-${viewport.width}.png`,
      fullPage: true,
    });
    const results = await new AxeBuilder({ page })
      .exclude("iframe")
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  }
});
