// Classe do herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Estrutura de decisão para definir o tipo de ataque
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Função para criar vários heróis e fazer todos atacarem
function iniciarJogo() {
  const listaDeHerois = [
    new Heroi("Arus", 30, "guerreiro"),
    new Heroi("Merlin", 150, "mago"),
    new Heroi("Shin", 40, "monge"),
    new Heroi("Kage", 25, "ninja")
  ];

  for (let i = 0; i < listaDeHerois.length; i++) {
    listaDeHerois[i].atacar();
  }
}

// Executa o jogo
iniciarJogo();
