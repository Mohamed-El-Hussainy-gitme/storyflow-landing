// src/data/projects.ts

export type Locale = "en" | "ar";

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface ProjectScreen {
  id: string;
  src: string;
  alt: string;
}

export interface ProjectHighlight {
  id: "keyPoints" | "focus" | "role" | "deployment";
  label: LocalizedText;
  body: LocalizedText;
}

export interface ProjectDefinition {
  id: string;
  universe: number;
  slug: string;
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  screens: ProjectScreen[];
  highlights: ProjectHighlight[];
}

export const projects: ProjectDefinition[] = [
  /**
   * 01 – Mini Shop – Single Page Store
   */
  {
    id: "mini-shop",
    universe: 1,
    slug: "project-1",
    name: {
      en: "Mini Shop – Single Page Store",
      ar: "Mini Shop – متجر صفحة واحدة",
    },
    tagline: {
      en: "I built an Arabic single-page storefront with a cart + checkout using pure HTML, CSS, and JavaScript.",
      ar: "قمت ببناء متجر عربي صفحة واحدة مع سلة شراء وخطوة دفع باستخدام HTML وCSS وJavaScript فقط.",
    },
    description: {
      en: [
        "I built Mini Shop as a lightweight e-commerce UI demo using HTML, CSS, and vanilla JavaScript.",
        "In a single scrollable page, I combined a hero, product grid, add-to-cart flow, cart summary, and checkout section to demonstrate an Arabic (RTL) shopping experience that stays clean, responsive, and fast.",
      ].join(" "),
      ar: [
        "قمت بتنفيذ Mini Shop كواجهة متجر إلكتروني خفيفة باستخدام HTML وCSS وJavaScript بدون أي إطار عمل.",
        "في صفحة واحدة قابلة للتمرير جهزت قسم تعريفي (Hero) وشبكة منتجات وتدفق إضافة للسلة وسلة شراء وقسم الدفع، لإظهار تجربة تسوّق عربية (RTL) متجاوبة وسريعة.",
      ].join(" "),
    },
    techStack: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/mohamedzainb2-eng/single-page-website",
    liveUrl: "https://mohamedzainb2-eng.github.io/single-page-website/",
    screens: [
      {
        id: "mini-shop-1",
        src: "/assets/project1/Screenshot 2025-11-27 151701.png",
        alt: "Mini Shop – Single Page Store screen 1",
      },
      {
        id: "mini-shop-2",
        src: "/assets/project1/Screenshot 2025-11-27 152128.png",
        alt: "Mini Shop – Single Page Store screen 2",
      },
      {
        id: "mini-shop-3",
        src: "/assets/project1/Screenshot 2025-11-27 153625.png",
        alt: "Mini Shop – Single Page Store screen 3",
      },
      {
        id: "mini-shop-4",
        src: "/assets/project1/Screenshot 2025-11-27 153722.png",
        alt: "Mini Shop – Single Page Store screen 4",
      },
      {
        id: "mini-shop-5",
        src: "/assets/project1/Screenshot 2025-11-27 153802.png",
        alt: "Mini Shop – Single Page Store screen 5",
      },
      {
        id: "mini-shop-6",
        src: "/assets/project1/Screenshot 2025-11-27 154052.png",
        alt: "Mini Shop – Single Page Store screen 6",
      },
      {
        id: "mini-shop-7",
        src: "/assets/project1/Screenshot 2025-11-27 154118.png",
        alt: "Mini Shop – Single Page Store screen 7",
      },
      {
        id: "mini-shop-8",
        src: "/assets/project1/Screenshot 2025-11-27 154445.png",
        alt: "Mini Shop – Single Page Store screen 8",
      },
    ],
    highlights: [
      {
        id: "keyPoints",
        label: {
          en: "Key points",
          ar: "أبرز النقاط",
        },
        body: {
          en: "Fake products, add-to-cart flow, cart and checkout section, and a clean one-page responsive layout with navbar and footer.",
          ar: "منتجات تجريبية، إضافة للسلة مع عرض سلة الشراء وقسم الدفع، وتخطيط صفحة واحدة متجاوب مع شريط تنقّل وتذييل بسيطين.",
        },
      },
      {
        id: "focus",
        label: {
          en: "Focus",
          ar: "التركيز",
        },
        body: {
          en: "I focused on a compact Arabic shopping flow: products → cart → checkout, all within one scrollable page.",
          ar: "ركّزت على تجربة تسوّق عربية مضغوطة: منتجات → سلة → دفع، داخل صفحة واحدة قابلة للتمرير.",
        },
      },
      {
        id: "role",
        label: {
          en: "My role",
          ar: "الدور",
        },
        body: {
          en: "I designed the UI and implemented the full storefront flow using pure HTML, CSS, and JavaScript.",
          ar: "قمت بتصميم الواجهة وتنفيذ تدفق المتجر بالكامل باستخدام HTML وCSS وJavaScript فقط.",
        },
      },
    ],
  },

  /**
   * 02 – Real Estate UI
   */
  {
    id: "real-estate-ui",
    universe: 2,
    slug: "project-2",
    name: {
      en: "Real Estate UI",
      ar: "Real Estate UI",
    },
    tagline: {
      en: "I built an Arabic RTL real estate UI with advanced filters, dark mode, interactive map, and property details.",
      ar: "قمت ببناء واجهة عقارات عربية (RTL) مع فلاتر متقدمة، وضع داكن، خريطة تفاعلية، وصفحات تفاصيل كاملة للعقار.",
    },
    description: {
      en: [
        "I built Real Estate UI as a modern React + Vite front-end for browsing properties.",
        "I implemented a full Arabic RTL layout, advanced filtering by price, area, rooms, property type, and city, plus text search across titles and locations. I also built a dedicated property details page with an image carousel and an interactive map using React Leaflet, along with a dark-mode theme and a fully responsive layout.",
      ].join(" "),
      ar: [
        "قمت بتنفيذ Real Estate UI كواجهة حديثة مبنية بـ React وVite لاستعراض العقارات.",
        "طوّرت تخطيطًا عربيًا كاملًا (RTL) مع فلاتر متقدمة حسب السعر والمساحة وعدد الغرف ونوع العقار والمدينة، بالإضافة إلى بحث نصي في العناوين والمواقع. كما جهزت صفحة تفاصيل للعقار تتضمن معرض صور وخريطة تفاعلية بـ React Leaflet، إلى جانب وضع داكن وتخطيط متجاوب بالكامل.",
      ].join(" "),
    },
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "React Leaflet",
      "Swiper",
    ],
    repoUrl: "https://github.com/mohamedzainb2-eng/real-estate-ui",
    liveUrl: "https://mohamedzainb2-eng.github.io/real-estate-ui/",
    screens: [
      {
        id: "real-estate-1",
        src: "/assets/project2/Screenshot 2025-12-01 003246.png",
        alt: "Real Estate UI home and filters screen",
      },
      {
        id: "real-estate-2",
        src: "/assets/project2/Screenshot 2025-12-01 003410.png",
        alt: "filtered properties screen",
      },
      {
        id: "real-estate-3",
        src: "/assets/project2/Screenshot 2025-12-01 003526.png",
        alt: "showing property page screen",
      },
         {
        id: "real-estate-4",
        src: "/assets/project2/Screenshot 2025-12-01 003635.png",
        alt: " showing property details screen",
      },
          {
        id: "real-estate-5",
        src: "/assets/project2/Screenshot 2025-12-01 003653.png",
        alt: " showing property details with map screen",
      },
          {
        id: "real-estate-6",
        src: "/assets/project2/Screenshot 2025-12-01 003738.png",
        alt: " dark mode screen",
      },
          {
        id: "real-estate-7",
        src: "/assets/project2/Screenshot 2025-12-01 003810.png",
        alt: " ordering section screen",
      },
          {
        id: "real-estate-8",
        src: "/assets/project2/Screenshot 2025-12-01 003825.png",
        alt: " showing property details screen dark mode",
      },
             {
        id: "real-estate-9",
        src: "/assets/project2/Screenshot 2025-12-01 003846.png",
        alt: " showing property details screen dark mode with map",
      },
    ],
    highlights: [
      {
        id: "keyPoints",
        label: {
          en: "Key points",
          ar: "أبرز النقاط",
        },
        body: {
          en: "Hero landing, advanced filters, Arabic RTL layout, property cards grid, details page with gallery, interactive map, and dark mode toggle.",
          ar: "واجهة رئيسية مع قسم Hero، فلاتر متقدمة، تخطيط عربي RTL كامل، شبكة بطاقات للعقارات، صفحة تفاصيل مع معرض صور، خريطة تفاعلية، وزر للتبديل إلى الوضع الداكن.",
        },
      },
      {
        id: "focus",
        label: {
          en: "Focus",
          ar: "التركيز",
        },
        body: {
          en: "I focused on making property search and comparison fast: filters, text search, and map navigation.",
          ar: "ركزت على جعل البحث عن العقارات ومقارنتها سريعًا عبر الفلاتر والبحث النصي والتصفح من خلال الخريطة التفاعلية.",
        },
      },
      {
        id: "role",
        label: {
          en: "My role",
          ar: "الدور",
        },
        body: {
          en: "I handled the front-end architecture, UI/UX, full RTL layout, and dark-mode implementation.",
          ar: "توليت هندسة الواجهة الأمامية وتصميم UI/UX، وضبط RTL بالكامل، وتنفيذ الوضع الداكن.",
        },
      },
    ],
  },

  /**
   * 03 – Admin Dashboard – React + Vite
   */
  {
    id: "admin-dashboard",
    universe: 3,
    slug: "project-3",
    name: {
      en: "Admin Control Dashboard",
      ar: "لوحة تحكم إدارية متكاملة",
    },
    tagline: {
      en: "I built a production-style admin dashboard with analytics, users, orders, products, notifications, and themes.",
      ar: "قمت ببناء لوحة تحكم إدارية احترافية تشمل التحليلات والمستخدمين والطلبات والمنتجات والتنبيهات والسمات.",
    },
    description: {
      en: [
        "I built this admin dashboard using React, Vite, Tailwind CSS, and Zustand to simulate a real-world backoffice UI.",
        "It includes a mock login flow and protected routes, a responsive sidebar/topbar, analytics charts with Recharts, rich tables for users, orders, and products, plus notifications, themes, dark mode, and English/Arabic (LTR/RTL) support.",
      ].join(" "),
      ar: [
        "قمت ببناء لوحة تحكم إدارية بأسلوب أقرب للإنتاج باستخدام React وVite وTailwind CSS وZustand.",
        "تضم تدفّق تسجيل دخول تجريبي ومسارات محمية، وشريطًا جانبيًا ورأسيًا متجاوبين، وتحليلات بمخططات Recharts، وجداول متقدمة للمستخدمين والطلبات والمنتجات، إلى جانب نظام تنبيهات وسمات متعددة ووضع داكن ودعم للغتين العربية والإنجليزية (LTR/RTL).",
      ].join(" "),
    },
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Router",
      "Recharts",
      "Framer Motion",
    ],
    repoUrl:
      "https://github.com/mohamedzainb2-eng/admin-dashboard-react-vite",
    liveUrl: "https://mohamedzainb2-eng.github.io/dashboard-admin/",
    screens: [
      {
        id: "admin-1",
        src: "/assets/project3/Screenshot 2025-12-02 190940.png",
        alt: "Admin dashboard analytics overview screen",
      },
      {
        id: "admin-2",
        src: "/assets/project3/Screenshot 2025-12-02 191014.png",
        alt: "Admin dashboard analytics sales screen",
      },
      {
        id: "admin-3",
        src: "/assets/project3/Screenshot 2025-12-02 191048.png",
        alt: "Admin dashboard users screen",
      },
      {
        id: "admin-4",
        src: "/assets/project3/Screenshot 2025-12-02 191205.png",
        alt: "Admin dashboard users with sorting screen",
      },
      {
        id: "admin-5",
        src: "/assets/project3/Screenshot 2025-12-02 191304.png",
        alt: "Admin dashboard orders with sorting screen",
      },
      {
        id: "admin-6",
        src: "/assets/project3/Screenshot 2025-12-02 191353.png",
        alt: "Admin dashboard products with sorting screen",
      },
      {
        id: "admin-7",
        src: "/assets/project3/Screenshot 2025-12-02 191426.png",
        alt: "Admin dashboard notifications screen",
      },
      {
        id: "admin-8  ",
        src: "/assets/project3/Screenshot 2025-12-02 191505.png",
        alt: "Admin dashboard settings appearance screen",
      },
      {
        id: "admin-9",
        src: "/assets/project3/Screenshot 2025-12-02 191606.png",
        alt: "Admin dashboard settings appearance with arabic rtl screen",
      },
      {
        id: "admin-10",
        src: "/assets/project3/Screenshot 2025-12-02 191634.png",
        alt: "Admin dashboard settings appearance with dark mode screen",
      },
    ],
    highlights: [
      {
        id: "keyPoints",
        label: {
          en: "Key points",
          ar: "أبرز النقاط",
        },
        body: {
          en: "Analytics, users, orders, products, settings, notifications, themes, dark mode, and a responsive dashboard layout.",
          ar: "صفحات تحليلات ولوحات بيانات، إدارة مستخدمين وطلبات ومنتجات، إعدادات وتنبيهات وسمات متعددة، ووضع داكن في تخطيط لوحة تحكم متجاوب.",
        },
      },
      {
        id: "focus",
        label: {
          en: "Focus",
          ar: "التركيز",
        },
        body: {
          en: "I focused on a clean admin UX: protected routes, flexible layout, and clear data presentation.",
          ar: "ركزت على UX نظيفة للوحة التحكم: مسارات محمية، تخطيط مرن، وعرض واضح ومنظّم للبيانات.",
        },
      },
      {
        id: "role",
        label: {
          en: "My role",
          ar: "الدور",
        },
        body: {
          en: "I handled front-end engineering, state management with Zustand, chart integration, and the UI component system.",
          ar: "توليت تطوير الواجهة الأمامية وإدارة الحالة باستخدام Zustand وربط المخططات وبناء نظام مكوّنات الواجهة.",
        },
      },
    ],
  },

  /**
   * 04 – Animation Studio
   */
  {
    id: "animation-studio",
    universe: 4,
    slug: "project-4",
    name: {
      en: "Animation Studio",
      ar: "Animation Studio – محرر حركات للويب",
    },
    tagline: {
      en: "I built a browser-based animation editor: timeline, layers, live preview, and export to CSS/HTML/JSON/React.",
      ar: "قمت ببناء محرر حركات داخل المتصفح: خط زمني، طبقات، معاينة حيّة، وتصدير إلى CSS/HTML/JSON/React.",
    },
    description: {
      en: [
        "I built Animation Studio as a lightweight front-end animation editor that runs entirely in the browser.",
        "It offers a mini timeline, layers panel, and live preview to design motion visually, then export clean CSS keyframes, HTML structure, JSON config, or a React component using Framer Motion. It also supports undo/redo and localStorage-based project saving.",
      ].join(" "),
      ar: [
        "قمت ببناء Animation Studio كمحرر حركات خفيف يعمل بالكامل داخل المتصفّح.",
        "يقدّم خطًا زمنيًا مصغّرًا ولوحة طبقات ومعاينة مباشرة لتصميم الحركة بصريًا، مع تصدير كود CSS Keyframes أو هيكل HTML أو إعدادات JSON أو مكوّن React يعتمد على Framer Motion، إلى جانب دعم التراجع/الإعادة وحفظ المشاريع عبر localStorage.",
      ].join(" "),
    },
    techStack: ["HTML", "CSS", "TypeScript", "Framer Motion"],
    repoUrl: "https://github.com/mohamedzainb2-eng/animation-studio",
    liveUrl: "https://mohamedzainb2-eng.github.io/animation-studio/",
    screens: [
      {
        id: "animation-1",
        src: "/assets/project4/Screenshot 2025-12-01 222924.png",
        alt: "Animation Studio timeline and layers screen",
      },
      {
        id: "animation-2",
        src: "/assets/project4/Screenshot 2025-12-01 223329.png",
        alt: "Animation Studio live preview screen",
      },
      {
        id: "animation-3",
        src: "/assets/project4/Screenshot 2025-12-01 223707.png",
        alt: "Animation Studio export panel screen",
      },
       {
        id: "animation-4",
        src: "/assets/project4/Screenshot 2025-12-01 223957.png",
        alt: "Animation Studio exported React code screen",
      },
    ],
    highlights: [
      {
        id: "keyPoints",
        label: {
          en: "Key points",
          ar: "أبرز النقاط",
        },
        body: {
          en: "Timeline, layers panel, live preview, undo/redo, device presets, and export to CSS, HTML, JSON, and React.",
          ar: "خط زمني ولوحة طبقات ومعاينة حيّة، مع تراجع وتقدّم، وخيارات أجهزة مختلفة، وتصدير إلى CSS وHTML وJSON وReact.",
        },
      },
      {
        id: "focus",
        label: {
          en: "Focus",
          ar: "التركيز",
        },
        body: {
          en: "I focused on making motion design approachable for front-end developers by keeping everything in the browser and exportable to CSS and Framer Motion.",
          ar: "ركزت على تبسيط تصميم الحركات لمطوّري الواجهة الأمامية بإبقاء كل شيء داخل المتصفّح وبصيغة قابلة للتصدير إلى CSS وFramer Motion.",
        },
      },
      {
        id: "role",
        label: {
          en: "My role",
          ar: "الدور",
        },
        body: {
          en: "I owned the product idea, the editor UX, and the implementation of the animation engine and export pipeline.",
          ar: "توليت ابتكار الفكرة وتصميم UX للمحرر وتنفيذ منطق الحركة ونظام التصدير.",
        },
      },
    ],
  },

  /**
   * 05 – HoloSpace OS
   */
  {
    id: "holospace-os",
    universe: 5,
    slug: "project-5",
    name: {
      en: "HoloSpace OS",
      ar: "HoloSpace OS – نظام تشغيل ويب ثلاثي الأبعاد",
    },
    tagline: {
      en: "I built a 3D web operating system with desktop, windows, apps, and system settings (React Three Fiber).",
      ar: "قمت ببناء نظام تشغيل ويب ثلاثي الأبعاد مع سطح مكتب ونوافذ وتطبيقات وإعدادات (React Three Fiber).",
    },
    description: {
      en: [
        "I built HoloSpace OS as a 3D spatial web operating system using React, Vite, TypeScript, Tailwind CSS, React Three Fiber, and Framer Motion.",
        "It simulates a futuristic desktop with a glassmorphism UI, animated dock and launcher, command palette, notifications panel, and multiple built-in apps (Music, Gallery, Notes, Settings) including themes, profiles, and club-mode visual/audio effects.",
      ].join(" "),
      ar: [
        "قمت ببناء HoloSpace OS كنظام تشغيل ويب ثلاثي الأبعاد باستخدام React وVite وTypeScript وTailwind CSS وReact Three Fiber وFramer Motion.",
        "يحاكي سطح مكتب مستقبليًا بتصميم زجاجي، وشريط تطبيقات وقائمة إطلاق متحركين، ولوحة أوامر، ولوحة تنبيهات، وتطبيقات مدمجة مثل الموسيقى ومعرض الصور والملاحظات والإعدادات، مع نظام سمات وملفات شخصية وتأثيرات بصرية/صوتية لوضع Club Mode.",
      ].join(" "),
    },
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "React Three Fiber",
      "@react-three/drei",
      "Framer Motion",
      "HTML5 Audio",
    ],
    repoUrl: "https://github.com/mohamedzainb2-eng/holospace-spatial-os",
    liveUrl: "https://mohamedzainb2-eng.github.io/holospace-web/",
    screens: [
      {
        id: "holospace-1",
        src: "/assets/project5/Screenshot 2025-12-06 235132.png",
        alt: "HoloSpace OS 3D desktop screen",
      },
      {
        id: "holospace-2",
        src: "/assets/project5/Screenshot 2025-12-06 235225.png",
        alt: "HoloSpace OS music player and visualizer screen",
      },
      {
        id: "holospace-3",
        src: "/assets/project5/Screenshot 2025-12-06 235303.png",
        alt: "HoloSpace OS gallery and windows manager screen",
      },
       {
        id: "holospace-4",
        src: "/assets/project5/Screenshot 2025-12-06 235404.png",
        alt: "HoloSpace OS gallery and windows manager screen another theme view",
      },
       {
        id: "holospace-5",
        src: "/assets/project5/Screenshot 2025-12-06 235639.png",
        alt: "HoloSpace OS notes app screen",
      },
       {
        id: "holospace-6 ",
        src: "/assets/project5/Screenshot 2025-12-06 235756.png",
        alt: "HoloSpace OS settings appearance screen",
      },
       {
        id: "holospace-7",
        src: "/assets/project5/Screenshot 2025-12-06 235829.png",
        alt: "HoloSpace OS settings appearance quality choices screen",
      },
       {
        id: "holospace-8",
        src: "/assets/project5/Screenshot 2025-12-06 235902.png",
        alt: "HoloSpace OS settings motions & FX screen",
      },
       {
        id: "holospace-9",
        src: "/assets/project5/screenshot 1.png",
        alt: "HoloSpace OS music player on mobile view screen",
      },
       {
        id: "holospace-10",
        src: "/assets/project5/screenshot 2.png",
        alt: "HoloSpace OS home screen on mobile view",
      },
      {
        id: "holospace-11",
        src: "/assets/project5/screenshot 3.png",
        alt: "HoloSpace OS another theme on mobile view screen",
      },
    ],
    highlights: [
      {
        id: "keyPoints",
        label: {
          en: "Key points",
          ar: "أبرز النقاط",
        },
        body: {
          en: "3D desktop, glassmorphism UI, animated dock and launcher, window manager, notifications panel, and multiple built-in apps.",
          ar: "سطح مكتب ثلاثي الأبعاد، واجهة زجاجية، شريط تطبيقات وقائمة إطلاق متحركة، مدير نوافذ، لوحة تنبيهات، وتطبيقات مدمجة متعددة.",
        },
      },
      {
        id: "focus",
        label: {
          en: "Focus",
          ar: "التركيز",
        },
        body: {
          en: "I focused on exploring spatial OS concepts in the browser: WebGL scenes, subtle motion, and system-level theming/profiles.",
          ar: "ركزت على استكشاف فكرة أنظمة التشغيل المكانية داخل المتصفّح: مشاهد WebGL، حركة خفيفة، ونظام سمات وملفات شخصية على مستوى النظام.",
        },
      },
      {
        id: "role",
        label: {
          en: "My role",
          ar: "الدور",
        },
        body: {
          en: "I designed the system, composed the 3D scene, built the UI, and implemented the full front-end.",
          ar: "قمت بتصميم النظام وبناء المشهد الثلاثي الأبعاد وتصميم الواجهة وتنفيذ الواجهة الأمامية بالكامل.",
        },
      },
    ],
  },

  /**
   * PR – PulseReach Media (Website)
   */
  {
    id: "pulsereach-media",
    universe: 6,
    slug: "project-6",
    name: {
      en: "PulseReach Media Website",
      ar: "PulseReach Media – موقع وكالة سوشيال ميديا (صفحات بيع باقات)",
    },
    tagline: {
      en: "I built conversion-focused bilingual landing pages for a social media agency (WordPress + coded templates).",
      ar: "قمت ببناء صفحات بيع باقات سوشيال ميديا ثنائية اللغة تركز على التحويل داخل WordPress عبر قوالب مبرمجة.",
    },
    description: {
      en: [
        "I built PulseReach Media as a bilingual (AR/EN) marketing agency website on WordPress using Astra Child Theme and custom coded templates.",
        "I focused on clean, modern UI and high-conversion sections (hero, social proof, pricing, FAQs, CTAs), with an RTL-first Arabic layout and scalable template-driven pages for Services, Packages, Results, and Contact, plus WPForms integration.",
      ].join(" "),
      ar: [
        "قمت ببناء PulseReach Media كموقع ثنائي اللغة (عربي/إنجليزي) لوكالة تسويق وسوشيال ميديا على WordPress باستخدام Astra Child Theme وقوالب صفحات مبرمجة.",
        "ركزت على واجهة حديثة وتجربة تحويل قوية عبر أقسام الهيرو وإثبات اجتماعي والباقات والأسعار والأسئلة الشائعة وCTA واضح، مع دعم RTL للعربية وقابلية التوسع لصفحات الخدمات والباقات والنتائج والتواصل ودمج WPForms.",
      ].join(" "),
    },
    techStack: [
      "WordPress",
      "PHP",
      "Astra (Child Theme)",
      "HTML5",
      "CSS (Design System Variables)",
      "WPForms",
      "Rank Math SEO",
    ],
    repoUrl: "",
    liveUrl: "https://pulsereachmedia.wuaze.com/",
    screens: [
      {
        id: "pulsereach-1",
        src: "/assets/project6/1.png",
        alt: "PulseReach Media home hero section (Arabic RTL)",
      },
      {
        id: "pulsereach-2",
        src: "/assets/project6/2.png",
        alt: "PulseReach Media pricing packages section",
      },
      {
        id: "pulsereach-3",
        src: "/assets/project6/3.png",
        alt: "PulseReach Media services section",
      },
      {
        id: "pulsereach-4",
        src: "/assets/project6/4.png",
        alt: "PulseReach Media results/case studies page",
      },
      {
        id: "pulsereach-5",
        src: "/assets/project6/5.png",
        alt: "PulseReach Media contact page with WPForms/CTA",
      },
      {
        id: "pulsereach-6",
        src: "/assets/project6/6.png",
        alt: "PulseReach Media mobile navigation and responsive layout",
      },
      {
        id: "pulsereach-7",
        src: "/assets/project6/7.png",
        alt: "PulseReach Media mobile navigation and responsive layout",
      },
      {
        id: "pulsereach-8",
        src: "/assets/project6/8.png",
        alt: "PulseReach Media mobile navigation and responsive layout",
      },
      {
        id: "pulsereach-9",
        src: "/assets/project6/9.png",
        alt: "PulseReach Media mobile navigation and responsive layout",
      },
    ],
    highlights: [
      {
        id: "keyPoints",
        label: {
          en: "Key points",
          ar: "أبرز النقاط",
        },
        body: {
          en: "Bilingual AR/EN, RTL-first layout, coded templates for 8 pages, pricing and conversion sections, reusable design system, and fast iteration inside WordPress.",
          ar: "ثنائي اللغة عربي/إنجليزي، دعم RTL بشكل صحيح، قوالب مبرمجة لعدة صفحات (حتى 8 صفحات)، أقسام تحويل قوية (باقات/CTA/FAQ)، نظام تصميم CSS قابل لإعادة الاستخدام، وسهولة تطوير وتعديل داخل ووردبريس.",
        },
      },
      {
        id: "focus",
        label: {
          en: "Focus",
          ar: "التركيز",
        },
        body: {
          en: "I focused on high-conversion landing structure (hero → social proof → pricing → FAQ → CTA), clean responsive UI, and SEO-ready pages built on scalable templates.",
          ar: "ركزت على هيكلة Landing Pages عالية التحويل (Hero → Social Proof → Pricing → FAQ → CTA) مع تصميم Responsive نظيف وجاهزية SEO وبنية Templates قابلة للتوسع.",
        },
      },
      {
        id: "role",
        label: {
          en: "My role",
          ar: "الدور",
        },
        body: {
          en: "I handled the UI structure, custom template coding (PHP), the CSS design system, content architecture, and the initial SEO setup.",
          ar: "توليت بناء الهيكلة والواجهات، برمجة قوالب الصفحات (PHP)، تصميم نظام CSS، تنظيم المحتوى وأقسام التحويل، وتجهيز أساسيات SEO.",
        },
      },
    ],
  },
/**
 * Arab Tourism Platform (Website)
 */
{
  id: "arab-tourism-platform",
  universe: 7,
  slug: "project-7",
  name: {
    en: "Arab Tourism Platform",
    ar: "Arab Tourism Platform – منصة المعالم السياحية العربية",
  },
  tagline: {
    en: "I built an Arabic-first static tourism directory with an interactive SVG map, per-country theming, and rich landmark pages (Next.js export).",
    ar: "قمت ببناء دليل سياحي عربي أولًا مع خريطة SVG تفاعلية وثيم لكل دولة وصفحات معالم غنية، جاهز للتصدير كـ Static (Next.js Export).",
  },
  description: {
    en: [
      "I built Arab Tourism Platform as a modern Arabic-first tourism directory using Next.js (App Router), React, and Tailwind CSS.",
      "I implemented a country → landmarks browsing flow, an interactive SVG map of the Arab world (d3-geo + topojson + world-atlas), and detailed landmark pages with long narrative text, sources, coordinates, and image-search suggestions.",
      "The project is fully static-export ready (generates an /out folder) and can be deployed to shared hosting such as InfinityFree without any backend—data is shipped locally as JSON/CSV and compiled into static pages.",
    ].join(" "),
    ar: [
      "قمت ببناء Arab Tourism Platform كمنصة دليل سياحي عربية أولًا باستخدام Next.js (App Router) وReact وTailwind CSS.",
      "نفّذت تجربة تصفح دولة → معالم، وخريطة SVG تفاعلية للوطن العربي (d3-geo + topojson-client + world-atlas)، وصفحات معالم غنية تحتوي على سرد عربي طويل ومصادر وإحداثيات واقتراحات بحث عن الصور.",
      "المشروع مُجهّز للتصدير كـ Static بالكامل (ينتج مجلد /out) ويمكن رفعه على استضافات Shared مثل InfinityFree بدون أي Backend، مع الاعتماد على بيانات محلية JSON/CSV تُحوّل إلى صفحات ثابتة.",
    ].join(" "),
  },
  techStack: [
    "Next.js (App Router)",
    "React",
    "Tailwind CSS",
    "Static Export (output: 'export')",
    "d3-geo",
    "topojson-client",
    "world-atlas",
    "Local JSON/CSV Dataset",
  ],
  repoUrl: "",
  liveUrl: "https://arabesque.lovestoblog.com/",
  screens: [
    {
      id: "arab-tourism-1",
      src: "/assets/project7/1.png",
      alt: "Home page showing the Arab world SVG map and countries directory",
    },
    {
      id: "arab-tourism-2",
      src: "/assets/project7/2.png",
      alt: "Interactive SVG map hover/click states for countries",
    },
    {
      id: "arab-tourism-3",
      src: "/assets/project7/3.png",
      alt: "Country page with themed header, categories, and landmark cards",
    },
    {
      id: "arab-tourism-4",
      src: "/assets/project7/4.png",
      alt: "Landmark details page with long Arabic narrative and quick facts",
    },
    {
      id: "arab-tourism-5",
      src: "/assets/project7/5.png",
      alt: "Landmark sources, coordinates, and image-search suggestions section",
    },
    {
      id: "arab-tourism-6",
      src: "/assets/project7/6.png",
      alt: "Search page results for landmarks and cities",
    },
    {
      id: "arab-tourism-7",
      src: "/assets/project7/7.png",
      alt: "Mobile responsive layout for map and directory browsing",
    },
    {
      id: "arab-tourism-8",
      src: "/assets/project7/8.png",
      alt: "Country theming via CSS variables and background motifs",
    },
    {
      id: "arab-tourism-9",
      src: "/assets/project7/Screenshot_2025-12-28-22-08-38-245_com.android.chrome.jpg",
      alt: "Country theming via CSS variables and background motifs",
    },
    {
      id: "arab-tourism-10",
      src: "/assets/project7/Screenshot_2025-12-28-22-07-12-883_com.android.chrome[1].jpg",
      alt: "Country theming via CSS variables and background motifs",
    },
  ],
  highlights: [
    {
      id: "keyPoints",
      label: {
        en: "Key points",
        ar: "أبرز النقاط",
      },
      body: {
        en: "Arabic-first UI, country → landmarks directory, interactive SVG map (d3-geo/topojson), per-country theming via CSS variables, and rich landmark pages (narrative + sources + coordinates). Fully static export to /out for shared hosting.",
        ar: "واجهة عربية أولًا، دليل دول → معالم، خريطة SVG تفاعلية (d3-geo/topojson)، ثيم لكل دولة عبر CSS Variables، وصفحات معالم غنية (سرد + مصادر + إحداثيات). تصدير Static كامل إلى /out لرفع المشروع على استضافات Shared.",
      },
    },
    {
      id: "focus",
      label: {
        en: "Focus",
        ar: "التركيز",
      },
      body: {
        en: "I focused on performance-friendly static architecture, clean responsive UI, scalable dataset-driven pages, and usable mobile map interactions (hover/focus/tap).",
        ar: "ركزت على بنية Static سريعة وخفيفة، واجهة Responsive نظيفة، صفحات قابلة للتوسع بالاعتماد على Dataset محلي، وتحسين تجربة الخريطة على الموبايل (tap/hover/focus).",
      },
    },
    {
      id: "role",
      label: {
        en: "My role",
        ar: "الدور",
      },
      body: {
        en: "I implemented the UI/UX, built a components system (cards, pills, sidebar blocks), handled static routing (country/landmark pages), integrated the interactive SVG map, created the theming system, and prepared JSON/CSV data utilities.",
        ar: "توليت تنفيذ الواجهات وتجربة المستخدم، وبناء نظام مكوّنات (Cards/Pills/Sidebar Blocks)، وإعداد صفحات Static للدول والمعالم، ودمج خريطة SVG التفاعلية، وبناء نظام الثيمات، وتجهيز أدوات التعامل مع بيانات JSON/CSV.",
      },
    },
    {
      id: "deployment",
      label: {
        en: "Deployment",
        ar: "النشر والاستضافة",
      },
      body: {
        en: "Static export-ready (Next.js output: 'export') producing /out for uploading via File Manager/FTP to InfinityFree or any static host.",
        ar: "جاهز للتصدير كـ Static (Next.js output: 'export') مع مجلد /out للرفع عبر File Manager/FTP على InfinityFree أو أي استضافة Static.",
      },
    },
  ],
},
];

export type ProjectId = (typeof projects)[number]["id"];
