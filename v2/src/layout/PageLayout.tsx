import React, { useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import { useScrollProgress } from "../core/hooks/useScrollProgress";
import { useLanguage } from "../core/i18n/LanguageContext";
import {
  CONTACT_EMAIL_RAW,
  CONTACT_GITHUB,
  CONTACT_LINKEDIN,
} from "../data/contact";
import type { ProjectDefinition } from "../data/projects";

interface PageLayoutProps {
  children: React.ReactNode;
  projects: ProjectDefinition[];
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, projects }) => {
  const { language } = useLanguage();
  const sectionIds = useMemo(
    () => ["hero", ...projects.map((p) => p.slug), "outro"],
    [projects]
  );

  const { progress } = useScrollProgress(sectionIds);

  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") return;

    const isArabic = language === "ar";

    const title = isArabic
      ? "محمد الحسيني | مطوّر واجهات أمامية — React وTypeScript وTailwind"
      : "Mohamed El-Husseiny | Frontend Developer — React, TypeScript, Tailwind";

    const description = isArabic
      ? "بورتفوليو محمد الحسيني — مطوّر واجهات أمامية (Frontend Developer) متخصص في React وTypeScript وTailwind. أعمل على صفحات هبوط (Landing Pages)، لوحات تحكّم، واجهات متاجر، وتحسين أداء المواقع (Core Web Vitals)."
      : "Mohamed El-Husseiny portfolio — Frontend Developer specialized in React, TypeScript, and Tailwind. I build landing pages, dashboards, product UIs, and performance-focused experiences (Core Web Vitals).";

    // Title
    document.title = title;

    // Meta description
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", description);

    // Canonical + OG URL (strip hash for canonical)
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`;
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute("href", canonicalUrl);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", canonicalUrl);

    // OG/Twitter title/description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);

    // Structured data (Person + Website + ItemList for projects)
    const baseUrl = canonicalUrl;
    const structuredDataEl = document.getElementById("structured-data");

    const itemList = projects.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: isArabic ? p.name.ar : p.name.en,
      url: `${baseUrl}#${p.slug}`,
    }));

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${baseUrl}#person`,
          name: "Mohamed El-Husseiny",
          alternateName: "محمد الحسيني",
          jobTitle: isArabic ? "مطوّر واجهات أمامية" : "Frontend Developer",
          url: baseUrl,
          email: `mailto:${CONTACT_EMAIL_RAW}`,
          sameAs: [CONTACT_GITHUB, CONTACT_LINKEDIN],
        },
        {
          "@type": "WebSite",
          "@id": `${baseUrl}#website`,
          name: isArabic ? "بورتفوليو محمد الحسيني" : "Mohamed El-Husseiny Portfolio",
          url: baseUrl,
          inLanguage: isArabic ? "ar" : "en",
          publisher: { "@id": `${baseUrl}#person` },
        },
        {
          "@type": "ItemList",
          "@id": `${baseUrl}#projects`,
          name: isArabic ? "المشاريع" : "Projects",
          itemListElement: itemList,
        },
      ],
    };

    if (structuredDataEl) {
      structuredDataEl.textContent = JSON.stringify(jsonLd);
    }
  }, [language, projects]);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      <div className="pointer-events-none fixed inset-x-0 top-[64px] z-30 hidden h-px bg-slate-900 md:block">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-400 transition-all duration-300"
          style={{ width: `${Math.max(5, progress * 100)}%` }}
        />
      </div>

      <main className="relative">{children}</main>
    </div>
  );
};

export default PageLayout;
