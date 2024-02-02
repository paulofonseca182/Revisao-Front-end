import PropTypes from 'prop-types';

function CardPeople({ listPeople }) {
  const { name, address, phoneNumber } = listPeople;
  return (
    <div>
      <p>
        {`Nome: ${name}`}
      </p>

      <p>
        {`Endereco: ${address}`}
      </p>

      <p>
        {`Numero de celular: ${phoneNumber}`}
      </p>
    </div>
  );
}

CardPeople.propTypes = {
  listPeople: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    phoneNumber: PropTypes.string,
  }).isRequired,
};

export default CardPeople;
