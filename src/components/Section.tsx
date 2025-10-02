export const Section = (props: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      id={props.id || ''}
      className={`relative w-full px-6 py-18 lg:px-16 xl:px-32 xl:pb-32 ${props.className || ''}`}
    >
      {props.children}
    </section>
  );
};
