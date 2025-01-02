import { Metadata } from "next";
import TokiMetaImage from "../../../public/vercel.svg";

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
  openGraph: {
    images: APP_BASE_URL + TokiMetaImage.src,
  },
  metadataBase: new URL(APP_BASE_URL),
};

export default function Home() {
  return (
    <div>
      <div> hi home page index</div>
    </div>
  );
}
