Descrição
Sua missão é vasculhar as salas da masmorra em busca de recompensas lendárias e desafios perigosos. Cada sala pode conter monstros formidáveis, tesouros preciosos ou ambos. Use suas habilidades estratégicas para enfrentar as ameaças e coletar os tesouros!

Tarefa
Escreva um programa que simule sua jornada heróica pela masmorra. O programa deve percorrer cada sala e verificar se há tesouros ou monstros. Se você encontrar um tesouro, colecionará a recompensa. Se encontrar um monstro, terá que derrotá-lo para continuar.

# 🏰 Aventura na Masmorra

## 📜 Descrição
Sua missão é explorar as salas da masmorra em busca de recompensas lendárias e desafios perigosos. Cada sala pode conter:
- 🐉 Monstros formidáveis 🏆
- 💰 Tesouros preciosos 🎁
- Ou ambos! ⚔️

Use suas habilidades estratégicas para enfrentar as ameaças e coletar os tesouros!

## 🎯 Tarefa
Desenvolva um programa que simule sua jornada heróica pela masmorra. O programa deve percorrer cada sala e verificar se há tesouros ou monstros:
- Se encontrar um **tesouro**, colete a recompensa. 🏆
- Se encontrar um **monstro**, derrote-o para continuar. ⚔️

## ⚠️ Atenção
Utilizamos a função `.includes()` do JavaScript para verificar se um número (representando a sala atual) está presente nos arrays `salasComTesouro` e `salasComMonstro`.

## 📥 Entrada
- Um número inteiro representando o **total de salas** na masmorra.

## 📤 Saída
Para cada sala visitada:
- Se houver um tesouro: `Tesouro na sala X!` 💎
- Se houver um monstro: `Monstro na sala X!` 🐉

## 📌 Exemplos
A tabela abaixo apresenta exemplos de entrada e suas respectivas saídas esperadas:

| Entrada | Saída |
|---------|------------------------------------------------|
| 3       | Tesouro na sala 2!<br>Monstro na sala 3! |
| 4       | Tesouro na sala 2!<br>Monstro na sala 3!<br>Tesouro na sala 4! |
| 2       | Tesouro na sala 2! |

Certifique-se de testar seu programa com diferentes casos! 🚀


## Exemplo

```markdown
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
const totalSalas = parseInt(gets());
//Aqui temos uma demonstração de array com valores já predefinidos:
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

//Aqui temos uma forma de loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= totalSalas; sala++) {
//Utilizamos o .includes() para verificar se um número está presente nos arrays:
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

//TODO: Agora implemente uma condição necessária para verificar e exibir se há tesouro na sala e se há montro na sala:
    if (  ) {
        print("Tesouro na sala " + sala + "!");
    } else if (  ) {
        print("Monstro na sala " + sala + "!");
    }
}

```

## Resposta

```mardown

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
const totalSalas = parseInt(gets());
//Aqui temos uma demonstração de array com valores já predefinidos:
const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];

//Aqui temos uma forma de loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= totalSalas; sala++) {
//Utilizamos o .includes() para verificar se um número está presente nos arrays:
    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);

//TODO: Agora implemente uma condição necessária para verificar e exibir se há tesouro na sala e se há montro na sala:
    if (  ) {
        print("Tesouro na sala " + sala + "!");
    } else if (  ) {
        print("Monstro na sala " + sala + "!");
    }
}

```
