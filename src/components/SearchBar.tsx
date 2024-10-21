import { useDispatch } from "react-redux";
import { setSearch, setShowSearch } from "../store/shopSlice";
import SearchIcon from "../assets/frontend_assets/search_icon.png";
import CrossIcon from "../assets/frontend_assets/cross_icon.png";

const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center border-b border-t bg-gray-50 text-center">
      <div className="mx-3 my-5 inline-flex w-3/4 items-center justify-center rounded-full border border-gray-400 px-5 py-2 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-inherit text-sm outline-none"
        />
        <button className="p-1">
          <img src={SearchIcon} alt="search icon" className="w-4" />
        </button>
      </div>
      <button className="mb-1 p-1">
        <img src={CrossIcon} alt="cross icon" className="inline w-4" />
      </button>
    </div>
  );
};

export default SearchBar;
