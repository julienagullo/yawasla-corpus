import type { Metadata } from "next";
import { Geist, Geist_Mono, Amiri } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TransliterationProvider } from "@/components/TransliterationProvider";
import BarreNavigation from "@/components/BarreNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Police arabe style naskh, plus lisible que le fallback système.
const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Yawasla Corpus",
  description: "Prototype de lecture verset par verset avec traduction au survol des mots.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${amiri.variable}`}
    >
      <body className="min-vh-100 d-flex flex-column">
        <ThemeProvider>
          <TransliterationProvider>
            {children}
            <BarreNavigation />
          </TransliterationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
