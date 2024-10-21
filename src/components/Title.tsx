const Title = ({ text1, text2 }: { text1: string; text2: string }) => {
  return (
    <div className="mb-4 py-8 text-center text-3xl">
      <div className="mb-3 inline-flex items-center gap-2">
        <h4 className="uppercase text-gray-500">
          {text1} <span className="font-medium text-gray-700">{text2}</span>
        </h4>
        <hr className="h-[1px] w-8 bg-gray-700 sm:h-[2px] sm:w-12" />
      </div>

      <p className="md:text-basetext-gray-600 mx-auto w-3/4 text-xs sm:text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the.
      </p>
    </div>
  );
};

export default Title;
