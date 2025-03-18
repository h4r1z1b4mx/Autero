import Image from "next/image";
import { Appbar } from "../../components/Appbar";
import { Hero } from "../../components/Hero";
import { HeroVideo } from "../../components/HeroVideo";
import { Brandtag } from "../../components/Brandtag";

export default function Home() {
  return (
    <main className="">
      <Appbar />
      <Hero />
      <HeroVideo/>
      <Brandtag />
    </main>
  );
}
