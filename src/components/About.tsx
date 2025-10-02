import Image from 'next/image';
import coding from '../assets/coding.webp';
import { ScrollDown } from './ScrollDown';
import { Section } from './Section';

export const About = () => {
  return (
    <Section id="about" className="bg-card">
      <ScrollDown />
      <div className="flex items-center justify-center gap-y-16 max-lg:flex-col lg:gap-x-32">
        <div>
          <h2 className="bg-background border-primary mb-8 w-max rounded-tl-[2.5rem] rounded-br-[2.5rem] border-4 px-10 py-4 font-sans text-3xl max-md:mx-auto md:mb-16">
            About me
          </h2>
          <div className="bg-background flex flex-col gap-x-2 gap-y-2 rounded-2xl p-6">
            <p>
              Hi, I&apos;m Falinantenaina, a passionate{' '}
              <span className="text-primary">Web Application Developer</span>{' '}
              from Antananarivo, Madagascar
            </p>
            <p>
              My skill set spans various programming languages and frameworks,
              including <span className="text-primary">HTML</span>,{' '}
              <span className="text-primary">CSS</span>,{' '}
              <span className="text-primary">JavaScript</span>,{' '}
              <span className="text-primary">React.js</span>,{' '}
              <span className="text-primary">Next.js</span> and more.
            </p>
            <p>
              I&apos;m always keen on learning{' '}
              <span className="text-primary">new technologies</span> and falling
              in love with the process of mastering them.
            </p>
          </div>
        </div>
        <Image
          src={coding}
          className="w-80 lg:min-w-80 xl:min-w-100"
          width={462}
          height={556}
          alt="coding"
        />
      </div>
    </Section>
  );
};
