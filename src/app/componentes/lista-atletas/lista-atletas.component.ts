import { AtletaService } from './../../servicos/atleta.service';
import { Atleta } from './../../models/atleta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-atletas',
  templateUrl: './lista-atletas.component.html',
  styleUrls: ['./lista-atletas.component.css']
})
export class ListaAtletasComponent implements OnInit {

  public lista: Array<Atleta>

  constructor(private service: AtletaService) {
    this.service.getAtletas('natação')
      .subscribe(data => {
        this.lista = data
      })
  }

  ngOnInit() {

  }

}
