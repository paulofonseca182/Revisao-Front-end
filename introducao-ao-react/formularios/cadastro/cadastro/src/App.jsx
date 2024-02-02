import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import CardPeople from './CardPeople';

function App() {
  const [listData, setListData] = useState([]);
  const [isTrue, setIsTrue] = useState(false);

  const updateList = (newObject) => {
    setIsTrue(true);
    setListData([...listData, newObject]);
  };

  return (
    <>
      <Form submitNewList={ updateList } />

      {isTrue && listData.map((e) => (
        <div key={ e.name }>
          <CardPeople listPeople={ e } />
        </div>
      ))}

    </>
  );
}

export default App;
