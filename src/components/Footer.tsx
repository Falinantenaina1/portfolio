import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="bg-card flex justify-between items-center p-6 md:py-8 xl:py-16 xl:px-32">
      <div>
        &copy;{new Date().getFullYear()} Falinantenaina
      </div>
      <div className="flex items-center gap-x-8">
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
  )
}
