import { Input, Output, EventEmitter } from '@angular/core';
import { AtletaService } from './../../servicos/atleta.service';
import { Atleta } from './../../models/atleta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-atletas',
  templateUrl: './lista-atletas.component.html',
  styleUrls: ['./lista-atletas.component.css']
})
export class ListaAtletasComponent implements OnInit {

  //define prop lista como input
  @Input()
  public lista: Array<Atleta>

  //define output selected para trasmitir para o parent component quando um novo atleta for selecionado
  @Output()
  public selected = new EventEmitter<Atleta>()

  constructor() {
  }

  ngOnInit() {

  }

  selecionar(atleta){
    //chama o output selected para avisar que um novo atleta foi selecionado
    this.selected.emit(atleta)
  }

}
