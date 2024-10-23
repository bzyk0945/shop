import AboutImg from "../assets/frontend_assets/about_img.png";
import NewsletterBox from "../components/NewsletterBox";
const About = () => {
  return (
    <section className="my-10">
      <div className="mb-3 flex items-center justify-center gap-2">
        <h4 className="text-3xl uppercase text-gray-500">
          about <span className="font-medium text-gray-700">us</span>
        </h4>
        <hr className="h-[1px] w-8 bg-gray-700 sm:h-[2px] sm:w-12" />
      </div>
      <div className="my-12 flex flex-col gap-8 md:flex-row">
        <img src={AboutImg} alt="about img" className="w-full md:w-[480px]" />
        <div className="flex flex-col items-center justify-center gap-5 text-center md:text-left">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <p className="text-2xl font-semibold">Our Mission</p>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="mb-3 flex items-center justify-start gap-2">
        <h4 className="text-xl uppercase text-gray-500">
          why <span className="font-medium text-gray-700">choose us</span>
        </h4>
        <hr className="h-[1px] w-8 bg-gray-700 sm:h-[2px] sm:w-12" />
      </div>
      <div className="mb-20 flex flex-col text-sm md:flex-row mt-10">
        <div className="flex flex-col gap-5 border px-10 py-8 sm:py-20 md:px-16">
          <h3 className="text-lg font-semibold">Quality Assurance:</h3>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="flex flex-col gap-5 border px-10 py-8 sm:py-20 md:px-16">
          <h3 className="text-lg font-semibold">Convenience:</h3>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="flex flex-col gap-5 border px-10 py-8 sm:py-20 md:px-16">
          <h3 className="text-lg font-semibold">
            Exceptional Customer Service:
          </h3>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </section>
  );
};

export default About;
