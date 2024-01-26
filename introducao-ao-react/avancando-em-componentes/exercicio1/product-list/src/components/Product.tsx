import './Product.css';

type ProductProps = {
  productInfo: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    image: string;
  }
};

function Product({ productInfo }: ProductProps) {
  return (
    <li>
      <div className="prodcut-data">
        <p>{productInfo.title}</p>
        <p>{`${productInfo.price} $`}</p>
      </div>
      <img src={productInfo.image} alt={productInfo.title} />
    </li>
  );
}

export default Product;
