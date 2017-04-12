import { Atleta } from './../../models/atleta';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atleta-detalhe',
  templateUrl: './atleta-detalhe.component.html',
  styleUrls: ['./atleta-detalhe.component.css']
})
export class AtletaDetalheComponent implements OnInit {

  private _atleta: Atleta

  //define propriedade atleta como input
  @Input()
  public set atleta(val) {
    this._atleta = val
    //cria dados aleatorios para o grafico
    this.doRadom()
  }
  public get atleta(): Atleta {
    return this._atleta;
  }

  constructor() { }

  ngOnInit() {

  }

  public graficoBatimentosData: Array<any>;

  public graficoBatimentosLabels: Array<any> = ['10 min', '20 min', '30 min', '40 min', '50 min', '60 min', '70 min'];

  public graficoBatimentosOpt: any = {
    responsive: true
  };

  public graficoAnaliseLabels: string[] = ['Resistência', 'Aceleração', 'Rendimento', 'Frequencia cardiaca', 'Impulso', 'Ritmo'];

  public graficoAnaliseData: Array<any>;


  private doRadom() {
    this.graficoBatimentosData = [
      { data: this.getRandomDataBatimentos(), label: 'Competição 1' },
      { data: this.getRandomDataBatimentos(), label: 'Competição 2' },
      { data: this.getRandomDataBatimentos(), label: 'Competição 3' }
    ]
    this.graficoAnaliseData = [
      { data: this.getRandomDataAnalise(), label: 'Média' }
    ]
  }

  private getRandomDataBatimentos() {
    let data = []

    for (let idx = 0; idx < 8; idx++) {
      data.push(this.getRadomNumber(80 + (idx * 2), 90 + (idx * 2)))
    }

    return data
  }

  private getRandomDataAnalise() {
    let data = []

    for (let idx = 0; idx < 7; idx++) {
      data.push(this.getRadomNumber(2, 10))
    }

    return data
  }

  private getRadomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

}
