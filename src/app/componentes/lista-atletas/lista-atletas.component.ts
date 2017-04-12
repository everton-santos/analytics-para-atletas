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

  @Input()
  public lista: Array<Atleta>

  @Output()
  public selected = new EventEmitter<Atleta>()

  constructor() {
  }

  ngOnInit() {

  }

  selecionar(atleta){
    this.selected.emit(atleta)
  }

}
