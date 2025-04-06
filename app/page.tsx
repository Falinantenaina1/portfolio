import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Works />
    </>
  );
}
