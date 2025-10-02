import { HoverEffect } from './ui/card-hover-effect';

const skills = [
  {
    title: 'HTML',
    link: 'https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Structuring_content',
    icon: '/html.svg'
  },
  {
    title: 'CSS',
    link: 'https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Styling_basics',
    icon: '/css.svg'
  },
  {
    title: 'JavaScript',
    link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
    icon: '/javascript.svg'
  },

  {
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    icon: '/typescript.svg'
  },

  {
    title: 'ReacJs',
    link: 'https://react.dev/',
    icon: '/reactjs.svg'
  },
  {
    title: 'NextJs',
    link: 'https://nextjs.org/',
    icon: '/nextjs.svg'
  },
  {
    title: 'NodeJs',
    link: '#',
    icon: '/nodejs.svg'
  },
  {
    title: 'ExpressJs',
    link: '#',
    icon: '/expressjs.svg'
  },
  {
    title: 'Tailwind',
    link: 'https://tailwindcss.com/',
    icon: '/tailwind.svg'
  },
  {
    title: 'Framer Motion',
    link: '#',
    icon: '/framer-motion.svg'
  },
  {
    title: 'Git',
    link: 'https://git-scm.com/',
    icon: '/git.svg'
  },
  {
    title: 'GitHub',
    link: 'https://github.com/',
    icon: '/github.svg'
  }
];

export const SkillCard = () => {
  return <HoverEffect items={skills} />;
};
