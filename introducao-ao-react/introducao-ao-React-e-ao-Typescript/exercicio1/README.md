# Criando um projeto React com Vite e TypeScript

## Crie um projeto chamado “Hello World” em React usando Vite. Ainda, inclua o eslint da Trybe.

- O projeto deve exibir o nome do usuário e a idade dele, que será calculada com base na data de nascimento (dd/mm/aaaa). O componente principal deve chamar outros dois componentes: Title e ModuleDetails.

- O componente Title deve exibir um título para o módulo, e o componente ModuleDetails deve apresentar mais informações sobre o módulo

* Checklist
     1. Crie um projeto React com TS usando Vite – npm create vite@latest.
     2.  Entre na pasta do projeto, instale as dependências e, depois, instale o eslint da Trybe – npm install @trybe/   eslint-config-frontend.
     3. Crie o arquivo .eslintrc.json e faça o extends para @trybe/eslint-config-frontend/typescript.
     4. Inicie o projeto e veja se está tudo funcionando.
        * Como sugestão, você pode deletar todo o conteúdo que não é necessário, do arquivo App.tsx e deixar apenas o return do componente com algo como <div>Work in progress</div>.

     5. Crie um componente chamado Title que exiba o título h1 Desenvolvimento Web na tela.
     6. Crie um componente chamado ModuleDetails que exiba o nome dos módulos deste curso.
     7. Crie um componente chamado HelloWorld que importa e renderiza os componentes criados anteriormente.
     8. Renderize o componente HelloWorld no componente App.
     9. No componente HelloWorld, crie uma função que calcule a idade do usuário a partir da data de nascimento e a exiba na tela. 
        * Dica: você poderá pegar essa fórmula pronta da internet ou do repositório da aula ao vivo.
        * Para realizar o cálculo da idade, você pode criar uma função utilitária, colocá-la dentro da pasta src/utils/age.ts e importá-la no componente HelloWorld ou, se preferir, pode criar a função diretamente no componente HelloWorld.