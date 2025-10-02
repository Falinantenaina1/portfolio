import { Heading } from './Heading';
import { Section } from './Section';
import WorksCard, { WorksProps } from './WorksCard';

const works: WorksProps[] = [
  {
    title: '3legant',
    desc: '3legant is an e-commerce website for headphones, earbuds, and accessories.',
    src: '/3legant.webp',
    hrefDemo: 'https://3legant-roan.vercel.app/'
  },
  {
    title: 'swrnym',
    desc: 'SWRNYM is a minimalist landing page to show dark and light mode in nextJS',
    src: '/swrnym.webp',
    hrefDemo: 'https://swrnym.vercel.app/'
  },
  {
    title: 'movie-mg',
    desc: 'Movie-MG is a movie listing website featuring popular, recent, and top-rated films.',
    src: '/movie.webp',
    hrefDemo: 'https://movie-mg.vercel.app/'
  }
];

export const Works = () => {
  return (
    <Section id="works" className="bg-card">
      <Heading
        title="Works"
        desc="I had the pleasure of working with these awesome projects"
      />
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {works.map((work) => (
          <WorksCard key={work.title} work={work} />
        ))}
      </div>
    </Section>
  );
};
