import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "@/lib/gym";
import "./globals.css";

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});
const display = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  title: "Neelkanth Gym | Gym in Laxmi Nagar & Madhu Vihar, Delhi",
  description:
    "Neelkanth Gym has two branches in Delhi: Laxmi Nagar (near Jagat Ram Park) and Madhu Vihar (Patparganj). Weight training, personal training, group classes, yoga, Zumba, Bollywood & more. Call +91 98106 42646.",
  applicationName: "Neelkanth Gym",
  openGraph: {
    title: "Neelkanth Gym — Built by you. Backed by us.",
    description:
      "Your stronger self starts here. Weight training, personal coaching, yoga & Zumba at our Laxmi Nagar and Madhu Vihar branches in Delhi.",
    type: "website",
    locale: "en_IN",
    siteName: "Neelkanth Gym",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Neelkanth Gym — Your stronger self starts here.",
    description:
      "Your neighbourhood gym in Laxmi Nagar and Madhu Vihar, Delhi. Train with purpose. Move your way.",
  },
  robots: { index: true, follow: true },
  category: "fitness",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111211" },
    { media: "(prefers-color-scheme: light)", color: "#f6f5f0" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('neelkanth-theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
