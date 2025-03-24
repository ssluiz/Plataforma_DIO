## **Entendendo o Desafio**
 
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro

Se XP for entre 1.001 e 2.000 = Bronze

Se XP for entre 2.001 e 5.000 = Prata

Se XP for entre 5.001 e 7.000 = Ouro

Se XP for entre 7.001 e 8.000 = Platina

Se XP for entre 8.001 e 9.000 = Ascendente

Se XP for entre 9.001 e 10.000= Imortal

Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

## Resposta

```
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível com base no saldo de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibe o resultado
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Exemplos de uso da função
calcularNivel(95, 20);  // O Herói tem um saldo de 75 e está no nível de Lendário
calcularNivel(50, 10);  // O Herói tem um saldo de 40 e está no nível de Prata
calcularNivel(120, 30); // O Herói tem um saldo de 90 e está no nível de Imortal

´´´

