import './Products-list.css';

type ListProps = {
  children: React.ReactNode;
};

function ProductsList({ children }: ListProps) {
  return (
    <div className="product-list">
      <h1>Lista de produtos</h1>
      <ul>
        {children}
      </ul>
    </div>
  );
}

export default ProductsList;
