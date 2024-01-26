import './App.css';
import ProductsList from './components/Products-list';
import products from './data';
import Product from './components/Product';

function App() {
  return (
    <ProductsList>
      {products
        .map((product) => <Product key={ product.id } productInfo={ product } />)}
    </ProductsList>
  );
}

export default App;
