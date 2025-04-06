import Image from "next/image"
import { ScrollDown } from "./ScrollDown"
import { Section } from "./Section"

export const About = () => {
    return (
        <Section id="about" className="bg-card">
            <ScrollDown />
            <div  className="flex max-lg:flex-col gap-y-16 lg:gap-x-32 items-center justify-center">
                <div>
                    <h2 className="bg-background text-3xl font-sans border-4 w-max mb-8 md:mb-16 max-md:mx-auto rounded-tl-[2.5rem] rounded-br-[2.5rem] py-4 px-10 border-primary">About me</h2>
                    <div className="bg-background flex flex-col gap-y-2 gap-x-2 p-6 rounded-2xl">
                        <p>Hi, I&apos;m Falinantenaina, a passionate <span className="text-primary">Web Application Developer</span> from Antananarivo, Madagascar</p>
                        <p>My skill set spans various programming languages and frameworks, including <span className="text-primary">HTML</span>, <span className="text-primary">CSS</span>, <span className="text-primary">JavaScript</span>, <span className="text-primary">React.js</span>, <span className="text-primary">Next.js</span> and more.</p>
                        <p>I&apos;m always keen on learning <span className="text-primary">new technologies</span> and falling in love with the process of mastering them.</p>
                    </div>
                </div>
                <Image src="/coding.png" className="w-80 lg:min-w-80 xl:min-w-100" width={462} height={556} alt="coding" />
            </div>
        </Section>
    )
}
