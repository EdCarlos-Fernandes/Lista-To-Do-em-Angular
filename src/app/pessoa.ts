export class Pessoa {
  public id: number;
  public nome: string;
  public idade: number;

  constructor(id: number, nome: string, idade: number) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
  }

  maturidade() {
    if (this.idade < 18) {
      return 'Criança';
    } else if (this.idade < 60) {
      return 'Adulto';
    } else if (this.idade < 90) {
      return 'Idoso';
    } else if (this.idade < 100) {
      return 'GOD';
    } else if (this.idade > 100) {
      return 'GOOOOOOD';
    } else {
      return '';
    }
  }
}
