import { Download } from "lucide-react"
import { buttonVariants } from "./ui/button"
import { FlipWords } from "./ui/flip-words"
import { Section } from "./Section"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

export const Hero = () => {

    const words = ["Frontend", "Backend", "React.js", "Next.js"]
    return (
        <Section className="flex max-md:flex-col items-center justify-between gap-y-8 md:gap-x-32 md:min-w-1/2">
            <div className="flex flex-col gap-y-4 lg:gap-y-8">
                <h1 className="font-sans text-3xl lg:text-5xl">Hi, I am <span className="text-primary">Falinantenaina</span></h1>
                <div className="max-sm:text-sm">
                    <p className="inline-block">I am a Web App developper in</p>&nbsp;<FlipWords words={words} />
                </div>
                <p>Passionate about building performant, user-friendly, and scalable applications</p>
                <div className="flex gap-x-2">
                    <Link className={cn(buttonVariants())} href="/">Dowload CV <Download /></Link>
                    <Link className={cn(buttonVariants({variant: "outline"}))} href="/">Contact Me</Link>
                </div>
            </div>
            <div className="min-w-70 lg:min-w-80 xl:min-w-100">
                <Image src="/profil.png" width={960} height={1280} className="bg-card rounded-full size-70 lg:size-80 xl:size-100 object-cover" alt="profil" />
            </div>
        </Section>
    )
}
