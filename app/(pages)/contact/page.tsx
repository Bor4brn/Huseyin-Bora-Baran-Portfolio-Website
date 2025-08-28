"use client"
import type React from "react"
import { emailIcon } from "@/app/assets/assets"
import SectionHeading from "@/components/SectionHeading"
import Button from "@/components/ui/Button"
import { Mail } from "lucide-react"
import ContactForm from "@/components/ContactForm/ContactForm"

export default function ContactPage() {
  const handleEmailClick = () => {
    const email = "hborabaran07@gmail.com";
    const subject = "Portfolio Contact";
    const body = "Hi Hüseyin, I'd like to get in touch with you.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="flex flex-col flex-1 gap-0 h-min overflow-hidden p-0 relative w-full items-center justify-start">
      <div className="flex flex-col gap-[60px] w-full max-w-full px-5 lg:px-0 lg:max-w-[750px] lg:w-[80%] items-center p-[80px_0px]">
        <SectionHeading
          icon={emailIcon}
          title="I Love to hear from you."
          description="Connect with Me Today. Let's Create Something Amazing Together!"
        >
          <div className="w-full flex justify-center">
            <div className="flex  items-center flex-none flex-nowrap  w-auto gap-5 h-min justify-center p-0 relative">
              <Button onClick={handleEmailClick} position='left' className="w-min" icon={<Mail size={18} />} title='Email Me' />
            </div>
          </div>
        </SectionHeading>

        <ContactForm />

      </div>
    </div>
  )
}

