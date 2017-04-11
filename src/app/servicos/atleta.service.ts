import { ListaAtletasComponent } from './../componentes/lista-atletas/lista-atletas.component';
import { DateFormatter } from '@angular/common/src/pipes/intl';
import { Observable } from 'rxjs/Rx';
import { AtletaDetalheComponent } from './../componentes/atleta-detalhe/atleta-detalhe.component';
import { Atleta } from './../models/atleta';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AtletaService {

  private urlServico: string = "https://randomuser.me/api/"

  constructor(private http: Http) {

  }

  public getAtletas(esporte: string): Observable<Array<Atleta>> {

    let result = new Observable<Array<Atleta>>(observer => {

      let lista = new Array<Atleta>();

      this.http.get(this.urlServico + '?results=10')
        .subscribe(response => {
          response.json().results.forEach(element => {
            lista.push({
              nome: `${element.name.first} ${element.name.last}`,
              sexo: element.gender ==  'male' ? 'masculino' : 'feminino',
              dataNascimento: new Date(element.dob),
              esporte: esporte
            })
          });

          observer.next(lista)

        })

    });


    return result;

  }


}
