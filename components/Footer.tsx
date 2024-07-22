import { socialMedia } from "@/constants";
import { Button } from "./ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 border-t-2 mt-10" id="contact">
      {/* background grid */}

      <div className="container">
        <div className="flex flex-col items-center ">
          <h1 className="heading lg:max-w-[45vw]">
            Ești gata să îți duci prezența{" "}
            <span className="text-purple">digitală</span> la următorul nivel?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Contactează-ne astăzi și hai să discutăm despre cum te pot ajuta
            să-ți atingi obiectivele.
          </p>
          <a href="mailto:moldovanalexismihai06@gmail.com">
            <Button
              variant="super"
              size="sm"
              className="hidden md:flex uppercase text-xs"
            >
              Contact
            </Button>
            {/* <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          /> */}
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col gap-3 md:gap-0 justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Moldovan Alexis
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center bg-zinc-300 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="social-icon" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
