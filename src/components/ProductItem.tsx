import { Link } from "react-router-dom"

const ProductItem = ({id, img, name, price}: {id: string, img: string, name: string, price: number}) => {
  return (
    <Link to={`/product/${id}`} className="text-gray-700">
        <div className="overflow-hidden">
            <img src={img} alt={name} className="hover:scale-110 transition ease-in-out" />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">${price}</p>
    </Link>
  )
}

export default ProductItem