"use client";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpLeft,
  Camera,
  Instagram,
  Layers3,
  Microscope,
  Sparkles,
} from "lucide-react";
import { clinic, dentalCases, type DentalCase } from "@/lib/clinic";
import { SectionHeading } from "./ui";

function CaseComparison({ item }: { item: DentalCase }) {
  const [position, setPosition] = useState(50);
  return (
    <article className="case-card">
      <div className="case-comparison">
        <Image
          src={item.after}
          alt={`بعد العلاج: ${item.title}`}
          fill
          sizes="(max-width: 700px) 90vw, 33vw"
        />
        <div
          className="case-before"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`قبل العلاج: ${item.title}`}
            fill
            sizes="(max-width: 700px) 90vw, 33vw"
          />
        </div>
        <span className="before-label">قبل</span>
        <span className="after-label">بعد</span>
        <div className="comparison-line" style={{ left: `${position}%` }} />
        <input
          aria-label={`مقارنة قبل وبعد: ${item.title}`}
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="comparison-range"
          dir="ltr"
        />
      </div>
      <div className="case-copy">
        <small>{item.treatment}</small>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <div className="heading-row">
          <SectionHeading
            eyebrow="من داخل العيادة"
            title="وراء كل ابتسامة، حكاية."
            description="تعرّف على أسلوبنا في العناية وتابع تفاصيل العمل على إنستغرام."
          />
          <a
            className="instagram-handle"
            href={clinic.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} />
            <span dir="ltr">@xxaslanxx</span>
            <ArrowUpLeft size={18} />
          </a>
        </div>
        {dentalCases.length > 0 ? (
          <div className="case-grid">
            {dentalCases.map((item) => (
              <CaseComparison key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="portfolio-grid">
            <a
              className="portfolio-feature"
              href={clinic.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="portfolio-graphic">
                <div className="smile-orbit orbit-one" />
                <div className="smile-orbit orbit-two" />
                <svg
                  className="smile-art"
                  viewBox="0 0 300 180"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M40 63Q150 170 260 63"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M60 81Q150 108 240 81"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="m96 94 2 17m35-12 1 29m34-29-1 29m35-33-2 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M252 20v24m-12-12h24M53 124v16m-8-8h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="graphic-note">كل ابتسامة لها بصمتها</span>
              </div>
              <div className="portfolio-card-caption">
                <div>
                  <span className="portfolio-category">قصص الابتسامات</span>
                  <h3>الحالات ونتائج العلاجات</h3>
                </div>
                <span className="circle-arrow">
                  <ArrowUpLeft size={22} />
                </span>
              </div>
            </a>
            <div className="portfolio-side">
              <a
                href={clinic.instagram}
                className="portfolio-topic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="topic-icon">
                  <Layers3 size={30} strokeWidth={1.3} />
                </span>
                <div>
                  <span className="portfolio-category">
                    التفاصيل تصنع الفرق
                  </span>
                  <h3>مواد نختارها بعناية</h3>
                  <p>تعرّف على المواد المستخدمة في العلاجات.</p>
                </div>
                <ArrowUpLeft size={20} />
              </a>
              <a
                href={clinic.instagram}
                className="portfolio-topic equipment-topic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="topic-icon">
                  <Microscope size={32} strokeWidth={1.3} />
                </span>
                <div>
                  <span className="portfolio-category">نظرة من الداخل</span>
                  <h3>تقنيات تخدم ابتسامتك</h3>
                  <p>اكتشف تجهيزات العيادة وخطوات الرعاية.</p>
                </div>
                <ArrowUpLeft size={20} />
              </a>
            </div>
          </div>
        )}
        <div className="portfolio-bottom">
          <p>
            <Camera size={17} /> تابع الحساب الرسمي للاطلاع على المحتوى والحالات
            المنشورة.
          </p>
          <span>
            <Sparkles size={15} /> كل حالة مختلفة، والخطة دائماً شخصية.
          </span>
        </div>
      </div>
    </section>
  );
}
