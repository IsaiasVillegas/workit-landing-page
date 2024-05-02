import { features } from "../constants";
import Feature from "./Feature";

const Features = () => {
  return (
    <section className="relative wavy after:bg-ghost-white after:h-[1050px] md:after:h-[835px] lg:after:h-[805px] -mt-[70px] after:-z-20 pt-[225px] md:pt-[276px] lg:pt-[325px] pb-[75px] md:pb-[102px] lg:pb-[163px]">
      <div className="container flex flex-col lg:flex-row gap-9 md:gap-12 lg:gap-4 justify-center items-center">
        {features.map((item) => (
          <Feature key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Features;
