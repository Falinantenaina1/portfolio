import { cn } from '@/lib/utils';
import { Mail, SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import profilImage from '../assets/profil.webp';
import { Section } from './Section';
import { buttonVariants } from './ui/button';
import { FlipWords } from './ui/flip-words';
export const Hero = () => {
  const words = ['Frontend', 'Backend', 'React', 'Next', 'Express', 'Node'];
  return (
    <Section
      id="home"
      className="flex items-center justify-between gap-y-8 max-md:flex-col md:min-w-1/2 md:gap-x-32"
    >
      <div className="flex flex-col gap-y-4 lg:gap-y-8">
        <h1 className="font-sans text-3xl lg:text-5xl">
          Hi, I am <span className="text-primary">Falinantenaina</span>
        </h1>
        <div className="max-sm:text-sm">
          <p className="inline-block">I am a Web App developper in</p>&nbsp;
          <FlipWords words={words} />
        </div>
        <p>
          Passionate about building performant, user-friendly, and scalable
          applications
        </p>
        <div className="flex gap-x-2">
          <Link className={cn(buttonVariants())} href="/#works">
            <span>Project</span>
            <SquareArrowOutUpRight />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: 'outline' }))}
            href="/#contact"
          >
            <span>Contact</span>
            <Mail />
          </Link>
        </div>
      </div>
      <div className="min-w-70 lg:min-w-80 xl:min-w-100">
        <Image
          src={profilImage}
          width={960}
          height={1280}
          className="bg-card size-70 rounded-full object-cover lg:size-80 xl:size-100"
          alt="profil"
        />
      </div>
    </Section>
  );
};
