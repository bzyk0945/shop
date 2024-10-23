import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Product } from "../types";
import ProductItem from "../components/ProductItem";
import DropDownIcon from "../assets/frontend_assets/dropdown_icon.png";

const Collection = () => {
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("relevant");
  const products = useSelector((state: RootState) => state.shop.products);
  const searchText = useSelector((state: RootState) => state.shop.search)
 
  const handleToggleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType((prevSelectedType) =>
      prevSelectedType.includes(type)
        ? prevSelectedType.filter((c) => c !== type)
        : [...prevSelectedType, type],
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((c) => c !== category)
        : [...prevSelectedCategories, category],
    );
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };
  useEffect(() => {
    let updatedProducts = products;

    if (selectedCategories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedType.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedType.includes(product.subCategory)
      );
    }

    if(searchText) {
      updatedProducts = updatedProducts.filter((product) => {
        return product.name.toLowerCase().includes(searchText.trim().toLowerCase())
      })
    }

    switch (sortOption) {
      case "low-high":
        updatedProducts = [...updatedProducts].sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        updatedProducts = [...updatedProducts].sort((a, b) => b.price - a.price);
        break;
    }

    setFilterProducts(updatedProducts);
  }, [products, selectedCategories, selectedType, sortOption, searchText]);
  return (
    <section className="mt-10 flex flex-col gap-1 md:flex-row md:gap-10">
      {/* LEFT SIDE */}
      <div className="min-w-60">
        <button
          onClick={handleToggleFilter}
          className="flex items-center gap-4 text-center"
        >
          <h3 className="my-2 text-3xl">Filters</h3>
          <img
            src={DropDownIcon}
            alt="drop down icon"
            className={`h-5 md:hidden ${isOpenFilter && "rotate-90"}`}
          />
        </button>
        <div
          className={`mt-6 border border-gray-300 py-3 pl-5 ${!isOpenFilter && "hidden"} md:block`}
        >
          <p className="mb-3 text-sm font-medium uppercase">categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <span className="flex gap-2">
              <input
                type="checkbox"
                value="Men"
                className="w-3"
                onChange={() => handleCategoryChange("Men")}
                checked={selectedCategories.includes("Men")}
              />
              Men
            </span>
            <span className="flex gap-2">
              <input
                type="checkbox"
                value="Women"
                className="w-3"
                onChange={() => handleCategoryChange("Women")}
                checked={selectedCategories.includes("Women")}
              />
              Woman
            </span>
            <span className="flex gap-2">
              <input
                type="checkbox"
                value="Kids"
                className="w-3"
                onChange={() => handleCategoryChange("Kids")}
                checked={selectedCategories.includes("Kids")}
              />
              Kids
            </span>
          </div>
        </div>
        <div
          className={`mt-6 border border-gray-300 py-3 pl-5 md:block ${!isOpenFilter && "hidden"}`}
        >
          <p className="mb-3 text-sm font-medium uppercase">type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <span className="flex gap-2">
              <input
                type="checkbox"
                value="Topwear"
                className="w-3"
                onChange={() => handleTypeChange("Topwear")}
                checked={selectedType.includes("Topwear")}
              />
              Topwear
            </span>
            <span className="flex gap-2">
              <input
                type="checkbox"
                value="Bottomwear"
                className="w-3"
                onChange={() => handleTypeChange("Bottomwear")}
                checked={selectedType.includes("Bottomwear")}
              />
              Bottomwear
            </span>
            <span className="flex gap-2">
              <input
                type="checkbox"
                value="Winterwear"
                className="w-3"
                onChange={() => handleTypeChange("Winterwear")}
                checked={selectedType.includes("Winterwear")}
              />
              Winterwear
            </span>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="mt-6 flex-1 md:mt-0">
        <div className="mb-4 flex justify-between text-xl sm:text-2xl">
          <div className="mb-3 flex items-center gap-2">
            <h4 className="uppercase text-gray-500">
              all <span className="font-medium text-gray-700">collections</span>
            </h4>
            <hr className="h-[1px] w-8 bg-gray-700 sm:h-[2px] sm:w-12" />
          </div>
          <select
            className="border-2 border-gray-300 px-2 text-sm"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        
        <div className={`${filterProducts.length !== 0 ? "grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4" : "flex items-center justify-center"}`}>
          {filterProducts.length === 0 ? <h2 className="text-2xl my-40">No Product Found</h2> : (
            filterProducts.map((product) => (
              <ProductItem
                key={product._id}
                id={product._id}
                name={product.name}
                img={product.image[0]}
                price={product.price}
              />
            ))
          )}
          
        </div>
      </div>
    </section>
  );
};

export default Collection;
