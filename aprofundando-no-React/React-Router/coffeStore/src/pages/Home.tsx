import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/coffees');
  };

  return (
    <>
      <h1>Home page</h1>
      <button onClick={ handleClick }>Cafes</button>
    </>
  );
}

export default Home;
