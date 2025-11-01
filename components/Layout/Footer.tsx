import Twitter from "@/public/assets/svg/twitter.svg"
import Facebook from "@/public/assets/svg/facebook.svg"
import Instagram from "@/public/assets/svg/instagram.svg"
import Image from "next/image"
import Logo from "@/public/assets/tsxsvgs/Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-40 py-16">
        <div className="relative">
          <div className="absolute -top-16 left-0 h-1 w-24 bg-orange"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0"><Logo /></div>
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 uppercase text-sm tracking-wider-sm font-bold">
            <a href="#" className="hover:text-orange transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-orange transition-colors">
              Headphones
            </a>
            <a href="#" className="hover:text-orange transition-colors">
              Speakers
            </a>
            <a href="#" className="hover:text-orange transition-colors">
              Earphones
            </a>
          </nav>
        </div>

        <p className="text-white/50 my-8 md:max-w-xl">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12">
          <p className="text-white/50 font-bold mb-8 md:mb-0">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-orange transition-colors"
            >
              <Image
                src={Facebook}
                className="cursor-pointer"
                alt="facebook icon"
                width={300}
                height={300}
                priority
              />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white hover:text-orange transition-colors"
            >
              <Image
                src={Twitter}
                className="cursor-pointer"
                alt="x icon"
                width={300}
                height={300}
                priority
              />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-orange transition-colors"
            >
              <Image
                src={Instagram}
                className="cursor-pointer"
                alt="instagram icon"
                width={300}
                height={300}
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
