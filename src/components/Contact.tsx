'use client';
import emailjs from '@emailjs/browser';
import { LoaderCircle, Send } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { Heading } from './Heading';
import { Section } from './Section';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current as HTMLFormElement, {
        publicKey: PUBLIC_KEY
      })
      .then(
        () => {
          form.current?.reset();
          toast.success('Your message is sent successfully ✅');
          setLoading(false);
        },
        () => {
          toast.error(
            'There was an error sending your message. Please try again ❌'
          );
          setLoading(false);
        }
      );
  };

  return (
    <Section id="contact">
      <Heading
        title="Contact"
        desc="I’m currently available for freelance work"
      />
      <div className="mx-auto mt-8 max-w-sm lg:max-w-4xl">
        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
          <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
            <div className="grid w-full items-center gap-2.5">
              <Label htmlFor="firstname">
                Firstname
                <span className="text-primary align-top text-xs/2">*</span>
              </Label>
              <Input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Firstname"
                required
              />
            </div>
            <div className="grid w-full items-center gap-2.5">
              <Label htmlFor="name">
                Lastname
                <span className="text-primary align-top text-xs/2">*</span>
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                required
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-2.5">
            <Label htmlFor="email">
              Email<span className="text-primary align-top text-xs/2">*</span>
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="grid w-full items-center gap-2.5">
            <Label htmlFor="phone">Phone number</Label>
            <Input
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone number"
            />
          </div>
          <div className="grid w-full items-center gap-2.5">
            <Label htmlFor="message">
              Message<span className="text-primary align-top text-xs/2">*</span>
            </Label>
            <Textarea
              placeholder="Leave a message"
              cols={20}
              name="message"
              id="message"
            />
          </div>
          <Button
            type="submit"
            className="mx-auto flex w-max cursor-pointer items-center"
          >
            {loading ? (
              <div className="flex items-center gap-x-1">
                Sending Message <LoaderCircle className="animate-spin" />
              </div>
            ) : (
              <div className="flex items-center gap-x-1">
                Send Message <Send />
              </div>
            )}
          </Button>
        </form>
      </div>
    </Section>
  );
};
