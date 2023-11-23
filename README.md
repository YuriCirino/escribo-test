## Primeiro desafio técnico para a vaga backend
### Descrição 
-	Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.
### Exemplos:
-	Caso sua função receba o inteiro 10, ela deve retornar 23, resultante do somatório dos números 3, 5, 6 e 9 que são menores que 10.
-	Caso sua função receba o inteiro 11, ela deve retornar 33, resultante do somatório dos números 3, 5, 6, 9 e 10 que são menores que 11.
### Instruções:
-	Sua função deve ser implementada em Dart ou em Javascript.
-	Sua implementação deve estar em um repositório público no Github.
-	Escreva um README no seu repositório com as instruções de como rodar o seu projeto e como podemos testá-lo
-	
## Sobre o código desenvolvido...

```javascript
function sumDivisibleBy3or5(numberArg){
...
}
let sum = sumDivisibleBy3or5(process.argv[2])
console.log(sum)
```
### Instruções para rodar
```sh
node main.js [number]
```
### Exemplo: 
Para obter a somatória dos números divisíveis por 3 ou 5 que seja inferior a 10, execute em seu terminal:
```sh
node main.js 10
```
