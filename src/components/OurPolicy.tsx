import ExchangeIcon from "../assets/frontend_assets/exchange_icon.png";
import QualityIcon from "../assets/frontend_assets/quality_icon.png";
import SupportIcon from "../assets/frontend_assets/support_img.png";

const OurPolicy = () => {
  return (
    <section className="my-10 py-20 flex items-center sm:flex-row flex-col justify-around gap-12 sm:gap-2 text-center">
      <div className="flex flex-col items-center">
        <img src={ExchangeIcon} alt="exchange icon" className="w-12 mb-5" />
        <h4 className="font-semibold">Easy Exchange Policy</h4>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={QualityIcon} alt="quality icon" className="w-12 mb-5"/>
        <h4 className="font-semibold">7 Days Return Policy</h4>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={SupportIcon} alt="support icon" className="w-12 mb-5"/>
        <h4 className="font-semibold">Best customer support</h4>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </section>
  );
};

export default OurPolicy;
