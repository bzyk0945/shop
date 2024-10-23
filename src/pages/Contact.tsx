import ContactImg from "../assets/frontend_assets/contact_img.png";
const Contact = () => {
  return (
    <section className="my-10">
      <div className="mb-3 flex items-center justify-center gap-2">
        <h4 className="text-3xl uppercase text-gray-500">
          contact <span className="font-medium text-gray-700">us</span>
        </h4>
        <hr className="h-[1px] w-8 bg-gray-700 sm:h-[2px] sm:w-12" />
      </div>
      <div className="flex flex-col gap-8 md:flex-row my-12">
        <img
          src={ContactImg}
          alt="contact img"
          className="w-full md:w-[480px]"
        />
        <div className="flex flex-col gap-5">
          <div className="">
            <h2 className="mb-4 text-3xl font-semibold">Our Store</h2>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>
          <div>
            <p>Tel: (415) 555-0132</p>
            <p> Email: admin@forever.com</p>
          </div>
          <p className="text-2xl font-semibold">Careers at Forever</p>
          <p>Learn more about our teams and job openings.</p>
          <div>
            <button className="border border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300">Explore Jobs</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
