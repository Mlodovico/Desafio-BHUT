# Desafio BHUT
## Sumário
* [Objetivo](#objetivo)
* [Dependências](#dependencias)
* [Instalação](#instalacao)

## Objetivo
  Esse sistema tem o objetivo de testar meus conhecimentos em nodejs, com um sistema
  CRUD.

## Depedências

 - yarn
 - node
 - banco de dados

## Instalação
  Para se instalar esse sistema, é necessário, que no mesmo caminho onde foi baixado o repositório do desafio BHUT, rode o comando:
  ```
    yarn
  ```
  Após a instalação de todos os pacotes, crie um novo conteiner docker (não necessário) e crie um banco de dados com o nome **bhut_cars** (obrigatório). Para que o sistema tenha onde depositar os dados criados, deletados, atualizados etc.<br />
  **Nota**: Não é preciso fazer a instalação nessa respectiva ordem. <br />
  Depois dos 2 (dois) procedimentos completos, o comando a seguir deve ser rodado pra que cria a tabela no banco de dados.
  ```
  yarn sequelize db:migrate
  ```
  Agora para finalizar, o comando abaixo é o suficiente para deixar o sistema em operação.
  ```
  yarn dev
  ```