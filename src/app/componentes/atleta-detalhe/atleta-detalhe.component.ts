import { Atleta } from './../../models/atleta';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atleta-detalhe',
  templateUrl: './atleta-detalhe.component.html',
  styleUrls: ['./atleta-detalhe.component.css']
})
export class AtletaDetalheComponent implements OnInit {

  @Input()
  public atleta: Atleta

  constructor() { }

  ngOnInit() {
  }

}
