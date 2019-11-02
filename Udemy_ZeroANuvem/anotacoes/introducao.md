# Introdução :rocket:

## O que é o NODE

Ambiente gratuito de código aberto para executar aplicações JavaScript do lado do servidor.

Surgiu em 2009.

## Arquitetura

LIBUV: Biblioteca do NODE
V8: Virtual Machine. A base para o NODE interpretar códigos JavaScripts, a mesma utilizada pelo Google Chrome
JS Modules: Módulos do NODE que pode acessar outros módulos nativos em C++

## Global

Window é o objeto Global.

## Process

Faz uma ponte com o script que estamos executando com o objeto que está sendo executado
Pode ouvir eventos.
Emite eventos.

## Módulos

Cada arquivo JS é considerado um módulo e cada módulo tem um escopo que é isolado dos outros módulos.
As variáveis e funções são acessíveis apenas no escopo do módulo.

### CommonJS

Especifíca que os módulos devem ser exportados para o mundo externo.

### Função Require

Diz ao node que a gente precisa importar um módulo para dentro do nosso script e desta forma podemos utilizar as funções que foram declaradas dentro do nosso script importado.

Só fazer o require não é o suficiente, para capturar o retorno desta função a gente precisa criar uma variável.

```javascript
const fs = require('fs')
```

## Criando um módulo

Na prática tudo que o node faz dentro de um arquivo JS é envolver o nosso arquivo dentro de uma função, por teste motivo as variáveis e funções dentro deste arquivo (módulo) ficam disponíveis apenas para aquele arquivo.

O objeto que a gente utiliza para exportar as variáveis e funções do arquivo .JS é o objeto exports.

### Maneiras de exportar o módulo

Uma das maneiras para exportar o módulo inteiro é chamar o objeto exports e atribuir um nome para este módulo, após isso indicar o que eu quero exportar.

```javascript
exports.nomeaqui = nomedoarquivo
```

Para utilizar o módulo personalizado em meus arquivos JS eu vou utilizar o require, não com o nome, mas com o caminho relativo ao meu arquivo. Não precisa colocar a extensão JS.

```javascript
const teste = require(./arquivoaqui).teste
```

Como eu exportei o arquivo inteiro, eu devo indicar qual a função eu quero utilizar e o **.teste** no final indica que quero pegar apenas esta referência do meu módulo, e não o módulo inteiro.

---

**Tudo que a gente definiu no exports é o que ele vai retonar.**

---

A outra maneira de exportar é indicar apenas a função que quero exportar do meu módulo, criando o código abaixo:

```javascript
  module.exports = minha_funcao
```

Desta forma estou indicando que estou exportando apenas e tão somente a minha função e não o módulo todo.

---

Outra maneira de importar o módulo é utilizar um pasta e dentro colocar um arquivo chamado *package.json* este arquivo é um json que deve conter:

```json
{
  "main": start.js
}
```

Este arquivo **package.json** deve estar dentro de uma pasta separada com o módulo em questão, o arquivo contendo meu módulo passará a ter o nome de *start.js* para ser inicializado pelo package.json.

O main do package.json é o primeiro arquivo que é chamado pelo node.js

### Node Package Manager NPM

