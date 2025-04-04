import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { Separator } from "./ui/separator"

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-6 md:py-8 xl:py-16 xl:px-32">
            <Link href="/" className="md:text-2xl xl:text-3xl">
                <span className="text-primary mr-2">&lt;F &gt;</span>
                Falinantenaina
            </Link>
            <div className="flex items-center gap-x-16">
                <div className="flex gap-x-4">
                    <Link href="/">Home</Link>
                    <Link href="/blogs">Blogs</Link>
                </div>
                <div className="hidden md:flex md:items-center md:gap-x-8">
                    <Link href="/" className="flex items-center gap-x-2">
                        <Instagram className="text-primary" /><span className="max-xl:hidden">Instagram</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-x-2">
                        <Linkedin className="text-primary" /><span className="max-xl:hidden">Linkedin</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-x-2">
                        <Github className="text-primary" /><span className="max-xl:hidden">Github</span>
                    </Link>
                </div>
            </div>
        </nav>
        
    )
}
