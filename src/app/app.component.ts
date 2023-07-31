import { Component } from '@angular/core';
import { Tarefas } from "./tarefas";


@Component({
  selector: 'teste',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  tarefas = [
    new Tarefas('Lista', ''),
  ];

  titulo = this.tarefas[0].titulo;
  valor = '';
  indiceSelecionado: any;
  display = 'display: none;';

  adicionar = (novoNome: any) => {
    if (novoNome.value !== '') {
      this.tarefas.push(new Tarefas('', novoNome.value));
      novoNome.value = '';
    } else {
      alert('Digite algo');
    }
  };
  remover = (tarefa: Tarefas) => {
    const index = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(index, 1);
  };
  editar = (tarefa: Tarefas) => {
    this.valor = tarefa.tarefa;
    this.indiceSelecionado = this.tarefas.indexOf(tarefa);
    this.display = 'display: inline;'
  };
  salvar = (n: string) => {
    this.valor = n;
    if (this.valor !== '') {
      this.tarefas[this.indiceSelecionado].tarefa = n;
      this.display = 'display: none;'
      this.valor = '';
      this.indiceSelecionado = '';
    } else {
      alert('Impossivel salvar um campo vazio, Digite algo');
    }
  };
  cancelar = () => {
    this.display = 'display: none;'
    this.valor = '';
    this.indiceSelecionado = '';
  };

}
