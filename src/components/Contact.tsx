import { Send } from "lucide-react"
import { Heading } from "./Heading"
import { Section } from "./Section"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

export const Contact = () => {
  return (
    <Section id="contact">
      <Heading title="Contact" desc="I’m currently available for freelance work" />
      <div className="max-w-sm lg:max-w-4xl mx-auto mt-8">
        <form className="space-y-6">
          <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
            <div className="grid w-full items-center gap-2.5">
              <Label htmlFor="firstname">Firstname<span className="text-xs/2 align-top text-primary">*</span></Label>
              <Input type="text" id="firstname" name="firstname" placeholder="Firstname" required />
            </div>
            <div className="grid w-full items-center gap-2.5">
              <Label htmlFor="lastname">Lastname<span className="text-xs/2 align-top text-primary">*</span></Label>
              <Input type="text" id="lastname" name="lastname" placeholder="Lastname" required />
            </div>
          </div>
          <div className="grid w-full items-center gap-2.5">
            <Label htmlFor="email">Email<span className="text-xs/2 align-top text-primary">*</span></Label>
            <Input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="grid w-full items-center gap-2.5">
            <Label htmlFor="phone">Phone number</Label>
            <Input type="number" id="phone" name="phone" placeholder="Phone number" required />
          </div>
          <div className="grid w-full items-center gap-2.5">
            <Label htmlFor="message">Message<span className="text-xs/2 align-top text-primary">*</span></Label>
            <Textarea placeholder="Leave a message" cols={20} name="message" id="message" />
          </div>
          <Button type="submit" className="w-max mx-auto flex items-center">Send Message <Send /></Button>
        </form>
      </div>
    </Section>
  )
}
