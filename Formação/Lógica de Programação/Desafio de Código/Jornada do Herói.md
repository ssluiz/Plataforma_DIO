**Básico**: ![Básico](https://img.shields.io/badge/Nível-Básico-green?style=flat-square)

 * Princípios Básicos

# Descrição
Você é um jovem herói que embarca em uma jornada épica para derrotar o temido dragão que aterroriza o reino. No entanto, você precisa atravessar uma floresta perigosa para chegar à caverna do dragão. Cada passo é crucial, e sua jornada será determinada pela lógica afiada que você possuir.

Tarefa: Escreva um algoritmo que simule a jornada do herói pela floresta. O herói começa em uma posição inicial e deve dar uma série de passos para atravessar a floresta até a caverna do dragão.

# Entrada
A posição inicial do herói na floresta (um número inteiro).

O número total de passos que o herói deve dar (um número inteiro).

# Saída
Imprima a posição final do herói após dar a quantidade de passos especificada.

## Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

| Entrada | Saída                     |
|---------|--------------------------|
| 2<br>3  | Posicao final do heroi: 5 |
| 15<br>3 | Posicao final do heroi: 18|
| 10<br>6 | Posicao final do heroi: 16|

# Instruções

Todas as entradas e saída dos algoritmos são utilizados o STDIN e STDOUT de cada linguagem, abaixo tem algumas dicas de como utilizar cada STDIN e STDOUT de cada linguagem

## JavaScript

Em JavaScript as funções de STDIN e STDOUT respectivamente são **gets** e **console.log**, a função gets é implementada internamente para auxiliar a entrada dos dados.

## Exemplo:
let line = gets(); // Lê a linha de entrada
console.log(line); // Imprime o dado

## Java

Em Java existe várias formas de implementar o STDIN e STDOUT recomendamos utilizar **BufferedReader** para o STDIN e o **System.out.println** para o STDOUT.

## Exemplo:
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringTokenizer st = new StringTokenizer(br.readLine()); // Lê a linha de entrada
int a = Integer.parseInt(st.nextToken());
System.out.println(a); // Imprime o dado

## Python

Em Python existe várias formas de implementar o STDIN e STDOUT recomendamos utilizar **sys.stdin.readline** para o STDIN e o **print** para o STDOUT.

## Exemplo:
import sys
a = int(sys.stdin.readline()) // Lê a linha de entrada
print(a); // Imprime o dado

# Descrição
Você é um jovem herói que embarca em uma jornada épica para derrotar o temido dragão que aterroriza o reino. No entanto, você precisa atravessar uma floresta perigosa para chegar à caverna do dragão. Cada passo é crucial, e sua jornada será determinada pela lógica afiada que você possuir.

**Tarefa:** Escreva um algoritmo que simule a jornada do herói pela floresta. O herói começa em uma posição inicial e deve dar uma série de passos para atravessar a floresta até a caverna do dragão.

#  Entrada
A posição inicial do herói na floresta (um número inteiro).

O número total de passos que o herói deve dar (um número inteiro).

# Saída
Imprima a posição final do herói após dar a quantidade de passos especificada.

## Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

| Entrada | Saída                     |
|---------|--------------------------|
| 2<br>3  | Posicao final do heroi: 5 |
| 15<br>3 | Posicao final do heroi: 18|
| 10<br>6 | Posicao final do heroi: 16|

# Projeto Proposto

```
JavaScript

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

//TODO: Calcule a posição final do herói:
const posicaoFinal = ;

// Imprime a posição final
print("Posicao final do heroi:", posicaoFinal);

```

# Resposta

```
JavaScript
// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

// Calcula a posição final do herói
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
print("Posicao final do heroi: " + posicaoFinal);

```
