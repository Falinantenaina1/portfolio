export const Heading = (props: {
    title: string
    desc: string
}) => {
    return (
        <>
            <h2 className="font-sans text-6xl/18 text-primary text-center w-max mx-auto border-b-2 border-primary">{props.title}</h2>
            <p className="text-center mt-4">{props.desc}</p>
        </>
    )
}
