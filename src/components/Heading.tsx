export const Heading = (props: { title: string; desc: string }) => {
  return (
    <>
      <h2 className="text-primary border-primary mx-auto w-max border-b-2 text-center font-sans text-4xl md:text-6xl/18">
        {props.title}
      </h2>
      <p className="mt-4 text-center">{props.desc}</p>
    </>
  );
};
