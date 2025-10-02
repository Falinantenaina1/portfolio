import Image from 'next/image';

export const ScrollDown = () => {
  return (
    <Image
      className="mx-auto hidden xl:block"
      src="/Scroll.svg"
      alt="scroll"
      width={32}
      height={143}
    />
  );
};
