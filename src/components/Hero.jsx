import { bgPattern1, bgPattern2, imgHero, logoLight } from "../assets";

const Hero = () => {
  return (
    <div className="w-full h-[481px] md:h-[540px] lg:h-[730px] relative wavy after:bg-dark-purple after:h-[481px] after:md:h-[540px] after:lg:h-[730px] overflow-x-clip">
      <header className="container flex items-center justify-between pt-8 lg:pt-14 mb-16 md:mb-[55px] lg:mb-[58px] ">
        <a href="#">
          <img src={logoLight} alt="loco workit" />
        </a>

        <button className="btn-line">Apply for access</button>
      </header>

      <div className="text-center">
        <h1 className="h1 text-white mb-10">
          Data{" "}
          <span className="relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bottom-[5px] after:left-0 after:bg-eucaplyptus">
            tailored
          </span>{" "}
          to <br /> your needs.
        </h1>

        <button className="btn-solid">Learn more</button>
      </div>

      <img
        className="absolute w-[320px] md:w-[514px] lg:w-[776px] bottom-[-92px] md:bottom-[-150px] lg:bottom-[-170px] left-[52%] -translate-x-[50%]"
        src={imgHero}
        alt="image hero"
        aria-hidden="true"
      />

      <img
        className="hidden md:block absolute -left-56 lg:-left-36 top-[43%] lg:top-[37%] -translate-y-[50%]"
        src={bgPattern1}
        alt="pattern"
        aria-hidden="true"
      />

      <img
        className="hidden md:block absolute -right-24 lg:-right-12 bottom-28 lg:bottom-60"
        src={bgPattern2}
        alt="pattern"
        aria-hidden="true"
      />
    </div>
  );
};

export default Hero;
