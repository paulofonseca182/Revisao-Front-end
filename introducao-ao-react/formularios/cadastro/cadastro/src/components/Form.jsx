import { useState } from 'react';

import PropTypes from 'prop-types';

function Form({ submitNewList }) {
  const data = {
    name: '',
    address: '',
    phoneNumber: '',
  };

  const [dataPerson, setDataPerson] = useState(data);

  const handleChange = (e) => {
    setDataPerson((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const updateData = (e) => {
    e.preventDefault();
    submitNewList(dataPerson);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          name="name"
          onChange={ (e) => handleChange(e) }
          value={ dataPerson.name }
          id="name"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="address">Endereco</label>
        <input
          id="address"
          type="text"
          name="address"
          onChange={ (e) => handleChange(e) }
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Telefone</label>
        <input
          id="phoneNumber"
          type="text"
          name="phoneNumber"
          onChange={ (e) => handleChange(e) }
        />
      </div>

      <button onClick={ (e) => updateData(e) }>Cadastrar</button>
    </form>
  );
}

Form.propTypes = {
  submitNewList: PropTypes.func.isRequired,
};

export default Form;
