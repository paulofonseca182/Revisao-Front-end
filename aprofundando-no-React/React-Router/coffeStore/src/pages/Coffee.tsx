import { Link, useParams } from 'react-router-dom';
import { coffeeList } from '../data';
import NotFound from './NotFound';

function Coffee() {
  const params = useParams();
  const currentCoffee = coffeeList.find((coffee) => coffee.slug === params.coffee);
  if (!currentCoffee) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  return (
    <div>
      <h1>{currentCoffee.title}</h1>
      <p>{currentCoffee.description}</p>
      <div>
        <h2>Ingredientes</h2>
        <ul>
          {
            currentCoffee.ingredients.map((ingredient) => (
              <li
                key={ ingredient }
              >
                {ingredient}
              </li>
            ))
          }
        </ul>
      </div>
      <img src={ currentCoffee.image } alt={ currentCoffee.title } />
    </div>

  );
}

export default Coffee;
