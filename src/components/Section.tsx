export const Section = (props: {
    id?: string,
    className?: string,
    children: React.ReactNode
}) => {
  return (
    <section id={props.id || ""} className={`w-full px-6 lg:px-16  xl:px-32 ${props.className || ""}`}>
        {props.children}
    </section>
  )
}
