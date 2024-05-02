import { bgPattern3, imgFounder } from "../assets";

const Founder = () => {
  return (
    <section className="pt-[100px] lg:pt-[120px]">
      <div className="container">
        <img
          className="mx-auto w-[281px] h-[281px] md:ml-0 lg:w-[477px] lg:h-[477px]"
          src={imgFounder}
          alt=""
        />

        <div className="bg-dark-purple ml-auto text-center py-8 px-8 relative -mt-[52px] md:-mt-[129px] lg:-mt-[305px] md:max-w-[514px] lg:max-w-[730px] md:text-left md:px-14 lg:px-14 md:pt-[48px] lg:pt-[60px] md:pb-[57px] lg:pb-[66px]">
          <h2 className="h2 text-white mb-4 md:mb-6 lg:mb-9">
            Be the first to test
          </h2>
          <p className="body text-white mb-6 lg:mb-8">
            Hi, I&apos;m Louis Graham, the founder of the company. Book a demo
            call with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I&apos;ll be in touch to
            schedule a call.
          </p>

          <button className="btn-solid">Apply for access</button>
          <img
            className="hidden md:block absolute -bottom-[106px] right-3 lg:-bottom-[60px] lg:right-16"
            src={bgPattern3}
            alt="pattern"
          />
        </div>
      </div>
    </section>
  );
};

export default Founder;
