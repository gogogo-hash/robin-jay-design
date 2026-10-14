// All site content lives here. Edit this file to update the portfolio.
// Image paths point to /public/images/... (BASE_URL handles the "/robin-jay-design/" base path).

const img = (path: string) => `${import.meta.env.BASE_URL}images/${path}`;

export type WorkCategory =
  | "Web Design"
  | "Banner"
  | "Thumbnail"
  | "Logo"
  | "Business Card";

export type Work = {
  id: string;
  title: string;
  /** Category used by the filter tabs */
  category: WorkCategory;
  /** Small caption shown under the title (defaults to category) */
  label?: string;
  image: string;
  alt: string;
};

export type Review = {
  name: string;
  role: string;
  message: string;
};

export type PriceItem = {
  name: string;
  price: number;
  /** Optional one-line note, e.g. "(バナーデザイン1〜5枚)" */
  note?: string;
  /** Bullet points */
  features?: string[];
};

export type PriceCategory = {
  title: string;
  items: PriceItem[];
};

export const site = {
  name: "ROBIN & JAY",
  tagline: "届く、伝わる、誰かのためになるデザインを。",
  logo: img("logo.svg"),

  nav: [
    { label: "Works", href: "#works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    title: "PORTFOLIO",
    subtitle: "届く、伝わる、誰かのためになるデザインを。",
  },

  works: {
    title: "WORK",
    subtitle: "誰かのために、心を込めてつくるデザイン。",
    filters: [
      "All",
      "Web Design",
      "Banner",
      "Thumbnail",
      "Logo",
      "Business Card",
    ] as const,
    items: [
      {
        id: "tabilingual",
        title: "ポッドキャスト用サムネイル",
        category: "Thumbnail",
        image: img("works/tabilingual.jpg"),
        alt: "旅リンガル ポッドキャストのサムネイル",
      },
      {
        id: "seminar-banner",
        title: "起業家セミナーSNS広告バナー",
        category: "Banner",
        image: img("works/seminar-banner.jpg"),
        alt: "売上10倍達成プログラム セミナー広告バナー",
      },
      {
        id: "online-auction",
        title: "SNS用広告バナー",
        category: "Banner",
        image: img("works/online-auction.jpg"),
        alt: "オンラインオークション SNS広告バナー",
      },
      {
        id: "bunny-moon-bazaar",
        title: "SNS用広告バナー",
        category: "Banner",
        image: img("works/bunny-moon-bazaar.jpg"),
        alt: "Otsukimi Bunny Moon Bazaar SNS広告バナー",
      },
      {
        id: "shop-card",
        title: "ショップカード",
        category: "Business Card",
        image: img("works/shop-card.jpg"),
        alt: "KNEWS ショップカード",
      },
      {
        id: "knews-logo",
        title: "ロゴデザイン",
        category: "Logo",
        image: img("works/knews-logo.jpg"),
        alt: "KNEWS ロゴデザイン",
      },
      {
        id: "ec-site",
        title: "ECサイトデザイン",
        category: "Web Design",
        label: "E-commerce",
        image: img("works/ec-site.jpg"),
        alt: "ECサイトのデザインカンプ",
      },
      {
        id: "english-school-banner",
        title: "英会話スクール広告バナー",
        category: "Banner",
        image: img("works/english-school-banner.jpg"),
        alt: "英会話スクール 入会金0円キャンペーンバナー",
      },
    ] satisfies Work[],
  },

  about: {
    title: "ABOUT ME",
    photo: img("about/profile.jpg"),
    photoAlt: "プロフィール写真",
    paragraphs: [
      "ご覧いただきありがとうございます。\nフリーランスとしてWeb広告をメインに手がけている、日本人デザイナーです。",
      "デザインにおいて私が重視しているのは、単なる美しさだけでなく、「そこに込められた想いを言葉以上に伝えること」です。\n海外での暮らしや、カフェ・アパレル業界で培った「人の気持ちに寄り添う視点」をデザインの土台にしています。じっくりとお話を聞きながら、課題を解決するための最適なクリエイティブをカスタマイズします。",
      "国内向けのバナー・サムネイルから、英語対応のバナー制作まで幅広く承っています。\nお見積もりや小さなお悩みなど、いつでもお気軽にお問い合わせください。",
    ],
  },

  reviews: {
    title: "REVIEW",
    subtitle: "お客様からのメッセージ",
    items: [
      {
        name: "Sarah Chen",
        role: "Creative Director",
        message:
          "お仕事ありがとうございました。とてもスムーズにコミュニケーションが取れて、また素早く対応して頂いてとても助かりました。今後ともどうぞよろしくお願い致します。",
      },
      {
        name: "Michael Torres",
        role: "Product Lead",
        message:
          "迅速にご対応いただいただけでなく、こちらの意図を正確に汲み取っていただきました。ありがとうございました！",
      },
      {
        name: "Emma Larsson",
        role: "Brand Manager",
        message:
          "丁寧に対応頂けて、非常に助かりました。感謝しています。お勧めのワーカーさんです。",
      },
      {
        name: "James Park",
        role: "CEO, StartupCo",
        message:
          "It was great to get your help.\nI will be coming back soon to ask for help again.",
      },
    ] satisfies Review[],
  },

  pricing: {
    title: "PRICE",
    subtitle: "あなたに寄り添い、あるべき姿を組み立てる",
    heading: "PRICE LIST",
    background: img("price/background.jpg"),
    currency: "¥",
    categories: [
      {
        title: "サイトデザイン＆システム開発",
        items: [
          {
            name: "コーポレートサイト制作",
            price: 300000,
            features: [
              "5〜15ページの構成",
              "カスタムブランドブログ",
              "基本機能パッケージ",
            ],
          },
          {
            name: "スタータープラン",
            price: 50000,
            features: ["1〜5ページの小規模構成", "デザインテンプレート使用"],
          },
        ],
      },
      {
        title: "バナーデザイン",
        items: [
          {
            name: "企画・キャンペーンプラン",
            price: 20000,
            note: "（バナーデザイン1〜5枚）",
          },
          {
            name: "WEB広告バナー制作",
            price: 15000,
            note: "（各種サイズに対応）",
          },
          {
            name: "SNSバナー制作（1枚）",
            price: 5000,
            note: "（INSTAGRAM/FACEBOOK用）",
          },
        ],
      },
      {
        title: "Webサイト月額メンテナンス",
        items: [
          {
            name: "スタンダードプラン",
            price: 15000,
            features: [
              "定期アップデート",
              "自動バックアップ",
              "基本的なSEO対策",
            ],
          },
          {
            name: "ベーシックプラン",
            price: 2000,
            features: [
              "テキスト・画像の更新",
              "軽微な不具合の修正",
              "定期的なセキュリティ確認",
            ],
          },
        ],
      },
    ] satisfies PriceCategory[],
  },

  contact: {
    title: "CONTACT",
    subtitle: "お気軽にお問い合わせください。",
    fields: {
      name: "お名前",
      email: "Email",
      message: "メッセージ",
    },
    submitLabel: "Send Message",
    // Set this to your form endpoint (Formspree, Getform, etc.) when ready
    formAction: "",
  },

  footer: {
    copyright: "© 2026 Portfolio. All rights reserved.",
  },

  links: [{ label: "Instagram", url: "https://instagram.com/your-handle" }],
};

export type Site = typeof site;

/** Format a number as yen, e.g. 300000 -> "¥ 300,000" */
export const formatPrice = (value: number) =>
  `${site.pricing.currency} ${value.toLocaleString("ja-JP")}`;
