import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Chewy } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const chewy = Chewy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chewy",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#FF2D55",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  verification: {
    google: "eP_k7lAoHo1853EwR8zCZmZedWBoRXSHVlCBn4R92PA",
  },
  metadataBase: new URL("https://willyoubmyvalentine.vercel.app"),
  title: {
    default: "Will You Be My Valentine?",
    template: "%s | Will You Be My Valentine"
  },
  description: "Create a free Valentine card with drawings. Ask 'Will you be my Valentine?' in a fun way. Find gift ideas and how to answer. No signup!",
  applicationName: "Will You Be My Valentine",
  authors: [{ name: "iloveyou" }],
  generator: "Next.js",
  keywords: [
    "will you be my valentine",
    "will you be my valentine game",
    "will you be my valentine online",
    "will you be my valentine link",
    "will you be my valentine card",
    "will you be my valentine gifts for her",
    "will you be my valentine answer",
    "be my valentine",
    "valentine card",
    "valentine gifts for her",
    "how to answer will you be my valentine",
    "valentine card ideas",
    "valentine proposal",
    "free valentine card",
    "personalized valentine card",
    "interactive valentine card",
    "valentine 2026",
    "february 14 2026",
    "valentine day card",
    "romantic valentine gifts",
    "valentine card creator",
    "online valentine card",
    "custom valentine card",
    "valentine message ideas",
    "best valentine gifts for her",
    "unique valentine card",
    "will you be my valentine gifts for her",
    "will you be my valentine card",

"will you be my valentine answer"
  ],
  referrer: "origin-when-cross-origin",
  creator: "Valentine Team",
  publisher: "Valentine Team",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://willyoubmyvalentine.vercel.app",
    title: "Will You Be My Valentine? - Free Card Creator",
    description: "Make a free Valentine card with custom drawings. Ask 'Will you be my Valentine?' the fun way! 💌",
    siteName: "Will You Be My Valentine",
    images: [
      {
        url: "/willyoubemyvalentine.webp",
        width: 1200,
        height: 630,
        alt: "Create personalized Valentine's Day card - Will you be my Valentine interactive experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Will You Be My Valentine? - Free Card",
    description: "Make a Valentine card with drawings. Ask 'Will you be my Valentine?' the fun way! 💌",
    images: ["/willyoubemyvalentine.webp"],
    creator: "@valentine_app",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://willyoubmyvalentine.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "Will You Be My Valentine",
      "alternateName": ["Valentine Card Creator", "Be My Valentine", "Valentine Gifts for Her"],
      "url": "https://willyoubmyvalentine.vercel.app",
      "description": "Make free Valentine cards with drawings. Ask 'Will you be my Valentine?' the fun way!",
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://willyoubmyvalentine.vercel.app/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebApplication",
      "name": "Will You Be My Valentine Card Creator",
      "applicationCategory": "LifestyleApplication",
      "operatingSystem": "Any",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "15000",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": "Custom drawings, Personalized messages, Shareable links, No signup required, Mobile friendly, Free forever"
    },
    {
      "@type": "HowTo",
      "name": "How to Ask Will You Be My Valentine",
      "description": "Make a Valentine card in 2 minutes",
      "totalTime": "PT2M",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Enter Their Name",
          "text": "Type who you want to ask",
          "position": 1
        },
        {
          "@type": "HowToStep",
          "name": "Draw Your Card",
          "text": "Draw something special or use our templates",
          "position": 2
        },
        {
          "@type": "HowToStep",
          "name": "Share the Link",
          "text": "Send the link via text or social media",
          "position": 3
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I ask someone 'Will you be my Valentine?'",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use our free card maker! Add their name, draw something cute, and share the link. It's way better than a text message and takes just 2 minutes."
          }
        },
        {
          "@type": "Question",
          "name": "What are the best Valentine gifts for her?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start with a personalized card from our creator. Then add flowers, chocolates, jewelry, or a love letter. The custom card makes any gift extra special!"
          }
        },
        {
          "@type": "Question",
          "name": "How do I answer 'Will you be my Valentine?'",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Be honest! If yes: 'I'd love to!' If you need time: 'Can we talk?' If no: 'Thanks for asking, but let's stay friends.' Always be kind."
          }
        },
        {
          "@type": "Question",
          "name": "Is this Valentine card maker free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! 100% free. No signup, no credit card, no hidden fees. Make unlimited cards and share them with anyone."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use this on my phone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Works great on phones, tablets, and computers. The drawing tool is touch-friendly."
          }
        },
        {
          "@type": "Question",
          "name": "What makes a good Valentine card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Be personal! Add custom drawings, inside jokes, or sweet messages. Our templates help you get started, then make it your own."
          }
        },
        {
          "@type": "Question",
          "name": "When should I send my Valentine card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Send it 3-7 days before Valentine's Day (Feb 14) so they have time to plan. But you can send it anytime!"
          }
        },
        {
          "@type": "Question",
          "name": "What are romantic Valentine gifts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Try: custom cards, flowers, love letters, jewelry, photo albums, spa days, or romantic dinners. Pair with our card for extra points!"
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "name": "Will You Be My Valentine",
      "url": "https://willyoubmyvalentine.vercel.app",
      "logo": "https://willyoubmyvalentine.vercel.app/willyoubemyvalentine.webp",
      "sameAs": [
        "https://twitter.com/valentine_app"
      ]
    },
    {
      "@type": "ItemList",
      "name": "Valentine Gift Ideas",
      "description": "Best gifts to pair with your Valentine card",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Custom Valentine Card",
          "description": "Personalized card with drawings"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Flowers",
          "description": "Roses or her favorite flowers"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Love Letter",
          "description": "Handwritten message"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Jewelry",
          "description": "Necklace or bracelet"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Photo Album",
          "description": "Your favorite memories"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${chewy.variable} antialiased`}
      >
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
