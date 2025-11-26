import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clarknarvas.com"),
  title: "Clark Narvas",
  description:
    "Creating an Impact — founder of StudioDana helping SMEs with video, design, and web presence.",
  openGraph: {
    title: "Clark Narvas",
    description:
      "Creating an Impact — founder StudioDana helping SMEs with video, design, and web presence.",
    url: "https://clarknarvas.com",
    siteName: "Clark Narvas",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/cover-photo.png",
        width: 1280,
        height: 720,
        alt: "Cover Photo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
