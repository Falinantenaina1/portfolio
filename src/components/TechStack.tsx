import { Heading } from './Heading';
import { Section } from './Section';
import { SkillCard } from './SkillCard';

export const TechStack = () => {
  return (
    <Section id="tech">
      <Heading
        title="Tech Stack"
        desc="I am striving to never stop learning and improving"
      />
      <SkillCard />
    </Section>
  );
};
