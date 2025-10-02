import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { TechStack } from '@/components/TechStack';
import { Works } from '@/components/Works';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Works />
      <Contact />
    </>
  );
}
