# Introdução.

Bem vindo ao projeto de automação do site da Amazon.

Ele foi todo criado utilizando Cypress com JavaScript.

Entre algumas de suas funcionalidades, estão:
- automação de login e verificações em todos os aspectos;
- automação do motor de busca;
- verifica se o produto comprado é o certo;
- verifica preço de capa é o mesmo do modal dinamicamente; 
- verifica preço de total da compra é o mesmo do valor total da pagina e do modal dinamicamente; 
- Cenario de compras com boleto;
- Cenario de desistencia de compras;

Obs 1: A compra com boleto não é finalizada para evitar o site da Amazon fazer pedidos que não serão comprados, mas a automação verifica se o botão finalizar compra existe e é funcional.

Obs 2: As vezes o site da Amazon percebe a automação e mostra um Capcha, quebrando ela. Nesse caso tem que repetir o comando de rodar a automação pois isso aconteceu duas vezes, portanto não custa documentar aqui o ocorrido.


## Configurando o ambiente de automação de testes Web

Para que sua automação possa ser realizada é necessário instalar alguns recursos, conforme será descrito abaixo:

## Linux/Windows

## 1- Instalação Cypress

Use os comandos abaixo no terminal:

```bash
$ npm install cypress --save-dev

$ npx cypress -v
```

## Rodando a automação:


## Abaixo alguns comandos para rodar a automação:

- Abre a interface do Cypress Test Runner: 
```bash
$ npx cypress open
```

- Roda Headless
```bash
$ npx cypress run
```

## Licença
Esse código é livre para ser usado dentro dos termos da licença MIT license

# amazon
# cypress