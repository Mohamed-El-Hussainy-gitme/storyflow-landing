import React from "react";
import { useLanguage } from "../core/i18n/LanguageContext";
import {
  CONTACT_EMAIL,
  CONTACT_GITHUB,
  CONTACT_LINKEDIN,
  CONTACT_WHATSAPP,
} from "../data/contact";

export const OutroSection: React.FC = () => {
  const { language, direction } = useLanguage();
  const isArabic = language === "ar";

  const title = isArabic
    ? "ما زال هناك عوالم أخرى قادمة"
    : "More worlds are already on the way";

  const body = isArabic
    ? "هذا مجرد جزء من البورتفوليو. أنا مستمر في بناء مشاريع جديدة وتجارب UI مختلفة. إذا ترغب في التعاون أو بناء صفحة هبوط قوية أو واجهة منتج سريعة ومتجاوبة، يسعدني أن أسمع منك."
    : "This is only part of my portfolio. I’m continuously building new UI experiments. If you want to collaborate or need a conversion-focused landing page or a fast, responsive product UI, I’d be happy to talk.";

  const emailLabel = isArabic ? "تواصل عبر البريد" : "Email";
  const githubLabel = "GitHub";
  const linkedinLabel = "LinkedIn";
  const whatsappLabel = isArabic ? "واتساب" : "WhatsApp";

  return (
    <section
      id="contact"
      dir={direction}
      className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-0"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
        {isArabic ? "النهاية – بداية جديدة" : "Ending · New beginning"}
      </p>

      <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
        {title}
      </h2>

      <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-slate-300">
        {body}
      </p>

      <div className="mx-auto mb-10 max-w-3xl text-left" dir={direction}>
        <h3 className="mb-3 text-base font-semibold text-slate-100">
          {isArabic ? "خدمات أقدّمها" : "Services I offer"}
        </h3>
        <ul className="grid gap-2 text-sm text-slate-300 md:grid-cols-2">
          <li className="rounded-2xl border border-slate-800/70 bg-slate-950/40 px-4 py-3">
            {isArabic
              ? "تصميم وتطوير صفحات هبوط (Landing Pages) تركّز على التحويل، مع كتابة أقسام واضحة وCTA قوي."
              : "Conversion-focused landing pages with clear sections, strong CTAs, and clean responsive layout."}
          </li>
          <li className="rounded-2xl border border-slate-800/70 bg-slate-950/40 px-4 py-3">
            {isArabic
              ? "واجهات React/TypeScript (RTL/LTR) للمنتجات ولوحات التحكم مع تنظيم مكوّنات قابل للتوسع."
              : "React/TypeScript UI for products and dashboards (RTL/LTR) with a scalable component system."}
          </li>
          <li className="rounded-2xl border border-slate-800/70 bg-slate-950/40 px-4 py-3">
            {isArabic
              ? "تحسين سرعة الموقع وCore Web Vitals: تحميل أسرع، صور محسّنة، وتجربة تمرير سلسة."
              : "Performance and Core Web Vitals improvements: faster loads, optimized media, and smoother UX."}
          </li>
          <li className="rounded-2xl border border-slate-800/70 bg-slate-950/40 px-4 py-3">
            {isArabic
              ? "تحسين SEO على مستوى الصفحة: عناوين H1/H2، Meta description، وStructured Data (Schema.org)."
              : "On-page SEO: semantic headings, meta description, and structured data (Schema.org)."}
          </li>
        </ul>
      </div>

      <div className="mx-auto mb-12 max-w-3xl text-left" dir={direction}>
        <h3 className="mb-3 text-base font-semibold text-slate-100">
          {isArabic ? "أسئلة شائعة" : "FAQ"}
        </h3>
        <div className="space-y-3">
          <details className="rounded-2xl border border-slate-800/70 bg-slate-950/40 px-4 py-3">
            <summary className="cursor-pointer text-sm font-medium text-slate-100">
              {isArabic
                ? "هل بورتفوليو صفحة واحدة مناسب للسيو؟"
                : "Is a single-page portfolio good for SEO?"}
            </summary>
            <p className="mt-2 text-sm text-slate-300">
              {isArabic
                ? "نعم بشرط وجود محتوى نصي كافٍ، عناوين دلالية، روابط واضحة للأقسام، وMeta + Schema. لهذا قمت بإضافة عناصر SEO داخل المشروع ليكون جاهزًا لمحركات البحث."
                : "Yes—if it has enough textual content, semantic headings, clear section anchors, and proper meta + schema. I structured this portfolio to be search-engine friendly."}
            </p>
          </details>

          <details className="rounded-2xl border border-slate-800/70 bg-slate-950/40 px-4 py-3">
            <summary className="cursor-pointer text-sm font-medium text-slate-100">
              {isArabic
                ? "كيف أجهّز الموقع لـ Google ونتائج الذكاء الاصطناعي؟"
                : "How do I prepare the site for Google and AI results?"}
            </summary>
            <p className="mt-2 text-sm text-slate-300">
              {isArabic
                ? "الأساس واحد: محتوى واضح، عناوين دقيقة، بيانات منظمة (Schema)، وسرعة عالية. إضافة ذلك، تساعد صفحات مشاريع مفصّلة وFAQ في تحسين الفهم الدلالي للموقع."
                : "The foundation is the same: clear content, precise headings, structured data (schema), and strong performance. Detailed project sections and FAQ also improve semantic understanding."}
            </p>
          </details>
        </div>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-4">
        {/* Email */}
        <a
          href={CONTACT_EMAIL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/70 px-5 py-2 text-sm font-medium text-slate-100 hover:border-indigo-400"
        >
          <span>✉</span>
          <span>{emailLabel}</span>
        </a>

        {/* GitHub */}
        <a
          href={CONTACT_GITHUB}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/70 px-5 py-2 text-sm font-medium text-slate-100 hover:border-indigo-400"
        >
          <span>&lt;/&gt;</span>
          <span>{githubLabel}</span>
        </a>

        {/* LinkedIn */}
        <a
          href={CONTACT_LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/70 px-5 py-2 text-sm font-medium text-slate-100 hover:border-indigo-400"
        >
          <span>in</span>
          <span>{linkedinLabel}</span>
        </a>

        {/* WhatsApp */}
        <a
          href={CONTACT_WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-emerald-900/60 px-5 py-2 text-sm font-medium text-emerald-50 hover:border-emerald-300"
        >
          <span>☎</span>
          <span>{whatsappLabel}</span>
        </a>
      </div>

      <p className="mt-6 text-xs text-slate-500">
        {isArabic
          ? "تكون هذه الواجهة مجرد نقطة بداية لاستعراض مشاريع الويب الخاصة بي المبنية بتقنيات حديثة – يمكنك دائمًا العودة لاحقًا لاكتشاف عوالم جديدة."
          : "This landing page is just a starting point for my web UI experiments. You can always come back later to explore new worlds as they go live."}
      </p>
    </section>
  );
};

export default OutroSection;
