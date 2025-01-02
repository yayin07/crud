import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const APP_BASE_URL = "https://example.com";

export const metadata: Metadata = {
  title: "Your Ultimate Collectibles Store | Tokiasia.com",
  description:
    "Discover a world of treasures at Tokiasia.com! Shop for exclusive collectible toys, LEGO sets, Funko Pops, sports cards, and sneakers. Find your passion now!",
  icons: [
    {
      type: "image/png",
      rel: "icon",
      url: "/favicon.png",
      sizes: "32x32",
    },
  ],

  metadataBase: new URL(APP_BASE_URL),
};

const customFonts = localFont({
  src: [
    {
      path: "./fonts/hi/Gordita-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/hi/Gordita-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/hi/Gordita-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/hi/Gordita-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/hi/Gordita-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/hi/Gordita-Thin.ttf",
      weight: "100",
      style: "normal",
    },

    // Adding .woff fonts below
    {
      path: "./fonts/hi/gordita-bold-webfont.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/hi/gordita-medium-webfont.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/hi/gordita-regular-webfont.woff",
      // weight: "500",
      // style: "normal",
    },
  ],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={customFonts.className}>{children}</body>
    </html>
  );
}
