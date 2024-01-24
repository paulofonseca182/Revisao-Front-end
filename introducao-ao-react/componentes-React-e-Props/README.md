# Criando um componente
- crie um componente chamado LottoNumbers. Esse componente deverá:

    * Receber uma prop chamada numbers, que conterá uma lista de números.
    * Retornar uma tag h3 que conterá o texto Os números sorteados são:.
    * Renderizar todos os números (recebidos via prop numbers) em formato de lista. Lembre-se de utilizar o método map.
    * A prop numbers deverá ser uma lista com 6 números. Caso não tenha, a aplicação não deverá mais renderizar a lista com esses números, mas sim o texto Erro: a lista não contém 6 números.
    * Por fim, no componente App, renderize o componente LottoNumbers criado acima, contendo uma prop numbers. Experimente passar como valor dessa prop as listas abaixo, a fim de verificar os diferentes resultados.
 
        * [7, 21, 59, 12, 42, 30];
        * [59, 12, 42, 30].