import { logoDark } from "../assets";
import Facebook from "../assets/svg/Facebook";
import Instagram from "../assets/svg/Instagram";
import Twitter from "../assets/svg/Twitter";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center pt-[73px] md:pt-[80px] lg:pt-[120px] pb-[65px] gap-14">
      <a href="#">
        <img src={logoDark} alt="loco workit" />
      </a>

      <div className="flex items-center gap-7">
        <a href="#" target="_blank">
          <Facebook className="fill-davy-grey hover:fill-dark-purple transition-colors duration-300" />
        </a>
        <a href="#" target="_blank">
          <Twitter className="fill-davy-grey hover:fill-dark-purple transition-colors duration-300" />
        </a>
        <a href="#" target="_blank">
          <Instagram className="fill-davy-grey hover:fill-dark-purple transition-colors duration-300" />
        </a>
      </div>

      <div className="font-manrope absolute bottom-2 left-1/2 -translate-x-1/2 font-inter text-dark-purple text-center text-xs">
        Challenge by{" "}
        <a
          className="text-eucaplyptus"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-eucaplyptus"
          href="https://github.com/IsaiasVillegas"
          target="_blank"
        >
          Isaias Villegas
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
