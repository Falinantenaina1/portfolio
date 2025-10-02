'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

export const HoverEffect = ({
  items,
  className
}: {
  items: {
    title: string;
    icon: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'mx-auto grid grid-cols-2 pt-10 max-sm:max-w-[21.25rem] sm:grid-cols-3 md:max-w-5xl md:grid-cols-3 lg:grid-cols-4',
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="group relative block h-full w-full p-1 md:p-2 lg:p-4"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="bg-primary absolute inset-0 block h-full w-full rounded-3xl dark:bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 }
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 }
                }}
              />
            )}
          </AnimatePresence>
          <Card className="p-0">
            <CardImage className="p-0">
              <Image
                src={item.icon}
                width={80}
                height={80}
                alt={`${item.title} icon`}
              />
            </CardImage>
            <CardTitle className="text-xs">{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'bg-card group-hover:border-secondary relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent p-4 dark:border-white/[0.2]',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        'mt-4 text-center font-sans font-bold tracking-wide',
        className
      )}
    >
      {children}
    </h3>
  );
};
export const CardImage = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        'mx-auto mt-8 h-20 w-20 text-sm leading-relaxed tracking-wide text-zinc-400',
        className
      )}
    >
      {children}
    </p>
  );
};
