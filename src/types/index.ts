export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string[];
    category: string;
    subCategory: string;
    sizes: string[];
    date: number;
    bestseller: boolean;
  }

  export interface CartItem {
    product: Product
    quantity: number,
    size:string,
   
  }