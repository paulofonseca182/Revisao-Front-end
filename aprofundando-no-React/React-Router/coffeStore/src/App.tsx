import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CoffeeList from './pages/CoffeList';
import Coffee from './pages/Coffee';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

function App() {
  return (

    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="coffees" element={ <CoffeeList /> } />
        <Route path="/coffees/:coffee" element={ <Coffee /> } />
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>

  );
}

export default App;
