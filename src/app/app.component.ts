import { Component } from '@angular/core';
import { Pessoa } from './pessoa';
import { Tarefas } from "./tarefas";

@Component({
  selector: 'teste',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  tarefas = [
    new Tarefas('Lista', '')
  ];

  titulo = this.tarefas[0].titulo;

  adicionar = (novoNome: any) => {
    if (novoNome.value !== '') {
      this.tarefas.push(new Tarefas('', novoNome.value));
      novoNome.value = '';
    } else {
      alert('Digite algo');
    }
  };








  // title = 'angularaulas';
  // //nomes = ['Ed Carlos', 'fulano', 'cicranos', 'beltrano'];
  // nomes = [
  //   new Pessoa(1, 'Ed Carlos', 105),
  //   new Pessoa(2, 'fulano', 30),
  //   new Pessoa(3, 'cicranos', 18),
  //   new Pessoa(4, 'beltrano', 85),
  //   new Pessoa(5, 'coisinho', 5),
  // ];
  // nomePrincipal = 'Ed Carlos';
  // trocarNome = (novoNome: any) => {
  //   this.nomePrincipal = novoNome;
  // }
  // limparInput = (inputValor: any) => {
  //   inputValor.value = '';
  // }
  //
  // corPrincipal = ''
  // trocarCor = (cor: any) => {
  //   this.corPrincipal = cor;
  // }
  //
  // click = (pessoa: any) => {
  //   alert(`clicou em: ${pessoa.nome}`)
  // }
}
