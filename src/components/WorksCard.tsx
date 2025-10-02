import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';

export type WorksProps = {
  title: string;
  desc: string;
  src: string;
  hrefDemo: string;
};

const WorksCard = ({ work }: { work: WorksProps }) => {
  return (
    <Card className="bg-background w-[20.5rem] text-white [1440px]:w-[50rem]">
      <CardContent className="space-y-4">
        <div className="h-35">
          <Image
            src={work.src}
            alt={`${work.title} poster`}
            width={1590}
            height={700}
            className="size-full rounded-md"
          />
        </div>
        <div>
          <h3 className="text-primary font-sans text-xl">{work.title}</h3>
          <p>{work.desc}</p>
        </div>
        <Link
          href={work.hrefDemo}
          target="_blank"
          className="text-primary flex items-center gap-x-1 text-sm"
        >
          <span>Live Demo</span>
          <SquareArrowOutUpRight className="size-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default WorksCard;
