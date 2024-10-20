import { Link } from "react-router-dom";
import Logo from "../assets/frontend_assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-40 px-4 text-sm sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="flex grid-cols-[3fr_1fr_1fr] flex-col gap-14 sm:grid sm:flex-row mb-10">
        <div>
          <img src={Logo} alt="logo forever" className="mb-5 w-32" />
          <p className="w-full text-gray-600 sm:w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h6 className="mb-5 text-xl font-medium pl-2">Company</h6>
          <ul className="flex list-none flex-col gap-1 text-gray-600">
            <li><Link to="/" className="inline-block px-2 py-1" >Home</Link></li>
            <li><Link to="/about" className="inline-block px-2 py-1">About us</Link></li>
            <li><Link to="/collection" className="inline-block px-2 py-1">Delivery</Link></li>
            <li><Link to="/" className="inline-block px-2 py-1">Privacy policy</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="mb-5 text-xl font-medium">GET IN TOUCH</h6>
          <ul className="flex list-none flex-col gap-1 text-gray-600">
            <li>+1-000-000-0000</li>
            <li>greatstackdev@gmail.com</li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-center text-sm font-medium">
          Copyright 2024@ greatstack.dev - All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
