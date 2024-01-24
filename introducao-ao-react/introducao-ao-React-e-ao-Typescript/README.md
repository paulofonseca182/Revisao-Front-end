# Criar uma aplicação React utilizando o Vite
   * npm create vite@latest
      * “Project name“: nome-do-projeto
      * “Select a framework“: React
      * “Select a variant“: TypeScript ou TypeScript + SWC (as duas opções são semelhantes, mas a segunda tem uma pequena melhoria de performance).
      * Após completar os passos acima, acesse o diretório criado utilizando o comando cd nome-do-projeto e instale as dependências utilizando o comando npm install. Para executar o projeto criado, utilize o comando npm run dev.
      * Para abrir o navegador automaticamente altere a chave dev do script no arquivo package.json para 'vite --open'

         ## Outras formas de criar projetos React
         - É possível utilizar outras ferramentas para criar projetos React já configurados. Neste conteúdo, será utilizado apenas o Vite, contudo, é importante saber que existem outras possibilidades, como:

            * Create React App – é uma alternativa popular para iniciantes, já que conta com diversas configurações pré-definidas. Entretanto, pela dificuldade de customização, é pouco recomendada para projetos em produção.
            * Parcel – é uma alternativa interessante, uma vez que exige pouca configuração e fornece boa performance, assim como o Vite, porém sua utilização pela comunidade é bem menor.
            * Next.js – é uma alternativa mais robusta, pois se trata de um framework completo com as próprias funcionalidades, como roteamento e renderização server-side.

# Configurando um repositorio remoto no projeto
   * iniciar um repositório git com o comando git init;
   * criar o primeiro commit com os comandos git add . e git commit -m "Initial commit";
   * configurar o repositório remoto com o comando git remote add origin <endereço-do-seu-projeto>;
   * sincronizar o repositório local com o repositório remoto por meio do comando git push origin main.

# Configurando o ESLint
- Excluir o arquivo de configuração de lint criado pelo vite com o comando:
   * rm .eslintrc.cjs

- Remover as dependências que foram instaladas pelo Vite. Essas dependências já estão incluídas no pacote do lint da Trybe, por isso não precisam estar presentes diretamente no projeto:
   * npm remove @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks eslint-plugin-react-refresh

- Instalar o pacote de regras de lint, nesse caso a configuração padrão da Trybe, com o comando:
   * npm i @trybe/eslint-config-frontend -D

- Criar o arquivo .eslintrc.json na raiz do projeto com o seguinte conteúdo:
   * {"extends": "@trybe/eslint-config-frontend/typescript"}

- Adicionar o script para rodar o ESlint:
   * "lint": "eslint -c .eslintrc.json . --ext .js,.jsx,.ts,.tsx"

- Criar o arquivo de configuração do VSCode .vscode/settings.json na raiz do projeto e adicionar a configuracao abaixo:
   * {
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true,
  },
  "extensions.ignoreRecommendations": false,
}