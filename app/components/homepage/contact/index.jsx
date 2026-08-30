// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  return (
    <section id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="mx-auto max-w-2xl rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-[#16f2b3]">Let&apos;s work together</h2>
        <p className="mt-3 text-gray-300">
          I&apos;m open to IT development and ERP system opportunities. Feel free to contact me by email.
        </p>
        <div className="mt-8 flex flex-col gap-5">
          <Link href={`mailto:${personalData.email}`} className="flex items-center gap-3 hover:text-[#16f2b3]">
            <MdAlternateEmail className="bg-[#8b98a5] p-2 rounded-full text-gray-800" size={36} />
            <span>{personalData.email}</span>
          </Link>
          <Link href={`tel:${personalData.phone}`} className="flex items-center gap-3 hover:text-[#16f2b3]">
            <IoMdCall className="bg-[#8b98a5] p-2 rounded-full text-gray-800" size={36} />
            <span>{personalData.phone}</span>
          </Link>
          <p className="flex items-center gap-3">
            <CiLocationOn className="bg-[#8b98a5] p-2 rounded-full text-gray-800" size={36} />
            <span>{personalData.address}</span>
          </p>
        </div>
        <div className="mt-8 flex items-center gap-5">
          <Link target="_blank" rel="noopener noreferrer" href={personalData.github} aria-label="GitHub">
            <IoLogoGithub className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800" size={48} />
          </Link>
          <Link target="_blank" rel="noopener noreferrer" href={personalData.linkedIn} aria-label="LinkedIn">
            <BiLogoLinkedin className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800" size={48} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
