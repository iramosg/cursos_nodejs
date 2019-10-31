# O que é o NODE?

Ambiente gratuito de código aberto para executar aplicações JavaScript do lado do servidor.

Surgiu em 2009.

##Arquitetura

LIBUV: Biblioteca do NODE
V8: Virtual Machine. A base para o NODE interpretar códigos JavaScripts, a mesma utilizada pelo Google Chrome
JS Modules: Módulos do NODE que pode acessar outros módulos nativos em C++

# Global
Window é o objeto Global.

# Process
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