import validator from 'validator';
import './style.css';

const getValor = document.getElementById('valor');
const getSelect = document.getElementById('select');
const getBtn = document.getElementById('btn');
const getText = document.getElementById('text');

getBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const campos = {
    cpf: validator.isTaxID(getValor.value, 'pt-BR'),
    email: validator.isEmail(getValor.value),

  };
  getText.innerHTML = `A validação retornou ${campos[getSelect.value]}`;
});
