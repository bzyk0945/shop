import React from "react";

const NewsletterBox = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="text-center">
      <h5 className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </h5>

      <p className="mt-3 font-medium text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-6 flex w-full min-w-[400px] items-center gap-3 border pl-3 md:w-1/2"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full outline-none sm:flex-1"
          required
        />
        <button
          className="bg-black px-10 py-4 text-sm uppercase text-white"
          type="submit"
        >
          subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterBox;
