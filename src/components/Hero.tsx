import HeroImg from "../assets/frontend_assets/hero_img.png";

const Hero = () => {
  return (
    <section className=" flex w-full items-center border border-gray-400 flex-wrap">
      <div className="flex w-full sm:w-1/2 flex-col items-center">
        <div className="py-10">
          <div className="flex items-center gap-2">
            <hr className="h-[3px] w-8 bg-[#414141] md:w-11" />
            <p className="text-sm font-medium uppercase md:text-base">
              our bestsellers
            </p>
          </div>
          <h1 className="prata-regular text-3xl leading-relaxed sm:py-3 lg:text-5xl">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold uppercase md:text-base">
              shop now
            </p>
            <hr className="h-[2px] w-8 bg-[#414141] md:w-11" />
          </div>
        </div>
      </div>
      <img src={HeroImg} alt="hero img" className="sm:w-1/2 w-full" />
    </section>
  );
};

export default Hero;
