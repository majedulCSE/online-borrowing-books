import Banner from "@/components/Banner";
import MarqueePage from "@/components/MarqueePage";
import TopFeatured from "@/components/TopFeatured";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueePage />
      <TopFeatured />
    </div>
  );
}
