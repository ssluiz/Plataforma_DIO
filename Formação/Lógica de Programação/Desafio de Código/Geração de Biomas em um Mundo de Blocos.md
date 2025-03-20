# ⛏️ Geração de Biomas em um Mundo de Blocos

## 📜 Descrição
Você é um mestre construtor em um mundo de blocos e tem a tarefa de gerar biomas em diferentes regiões do mundo. Cada bioma possui características únicas, como:
- 🌱 Tipos de solo
- 🌳 Vegetação
- 🌦️ Clima

Além disso, você deve minerar recursos valiosos utilizando sua picareta! 🛠️

## 🎯 Tarefa
Sua missão é coletar minérios enquanto ataca uma rocha com sua picareta. Para isso, use loops e lógica de programação para representar cada golpe e determinar qual minério foi obtido.

## 📥 Entrada
- O programa solicitará que você digite um **número inteiro positivo** representando a quantidade de golpes que deseja dar com a picareta.

## 📤 Saída
Para cada golpe realizado, o programa exibirá uma mensagem indicando o resultado do golpe. A saída indicará:
- O número do golpe
- O minério obtido, que pode ser:
  - `1: Carvão` 🪨
  - `2: Ferro` ⛏️
  - `3: Diamante` 💎
  - `4: Pedra` 🏔️

## 📌 Exemplos
A tabela abaixo apresenta exemplos de entrada e suas respectivas saídas esperadas:

| Entrada | Saída |
|---------|------------------------------|
| 4       | 1: Carvão <br> 2: Ferro <br> 3: Diamante <br> 4: Pedra |
| 3       | 1: Carvão <br> 2: Ferro <br> 3: Diamante |
| 2       | 1: Carvão <br> 2: Ferro |


## Exemplo

```markdown
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Lê a quantidade de golpes informada pelo usuário. 
// O parseInt(()) vai converter os valores de entrada(string) para um valor numérico(Int).
const quantidadeGolpes = parseInt(gets());

// TODO: Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
let minerais = ["   ", " ", "   ", "   "];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = i % minerais.length;
  
  // TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  print(    );
}

```

## Resposta

```markdown
// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output), pulando linha.

// Lê a quantidade de golpes informada pelo usuário.
// O parseInt() vai converter os valores de entrada (string) para um valor numérico (int).
const quantidadeGolpes = parseInt(gets());

// Defina aqui os tipos de minerais: Carvao, Ferro, Diamante e Pedra
let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = (i - 1) % minerais.length;

  // Exibe o índice i, concatena com o caractere ":", após, concatena com o tipo de minerais[minaIndex]
  print(`${i}: ${minerais[minaIndex]}`);
}

```
