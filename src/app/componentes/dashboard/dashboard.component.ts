import { Component, OnInit } from '@angular/core';
import { Atleta } from "app/models/atleta";
import { AtletaService } from './../../servicos/atleta.service';
import { Random } from "app/random";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public ciclistas: Array<Atleta>
  public nadadores: Array<Atleta>

  public graficoVelocidadeData: Array<any>;

  public graficoVelocidadeLabels: Array<any> = [];

  public graficoVelocidadeNadadoresData: Array<any>;

  public graficoVelocidadeNadadoresLabels: Array<any> = [];

  public graficoOpt: any = {
    responsive: true
  };

  constructor(private service: AtletaService) { }

  ngOnInit() {

    this.setGraficoVelocidade()
    this.setGraficoVelocidadeNadadores()

    this.service.getAtletas('ciclismo', null, 5)
      .subscribe(data => {
        this.ciclistas = data
        let labels = []
        this.ciclistas.forEach(c => {
          labels.push(c.nome)
        })
        this.graficoVelocidadeLabels = labels;
      })

    

    this.service.getAtletas('natação', null, 5)
      .subscribe(data => {
        this.nadadores = data
        let labels = []
        this.nadadores.forEach(c => {
          labels.push(c.nome)
        })
        this.graficoVelocidadeNadadoresLabels = labels;
      })
  }

  setGraficoVelocidade() {

    let data = []

    for (let idx = 0; idx < 6; idx++) {
      data.push(Random.getRadomNumber(35, 50))
    }

    this.graficoVelocidadeData = [
      { data: data, label: 'velocidade km' }
    ]
  }

  setGraficoVelocidadeNadadores() {

    let data = []

    for (let idx = 0; idx < 6; idx++) {
      data.push(Random.getRadomNumber(1, 6))
    }

    this.graficoVelocidadeNadadoresData = [
      { data: data, label: 'velocidade m/s' }
    ]
  }



}
