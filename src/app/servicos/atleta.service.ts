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

  /**
   * Retorna observable de atletas de um esporte especifico
   * 
   * @param esporte 
   */
  public getAtletas(esporte: string): Observable<Array<Atleta>> {

    //cria o observable a ser retornado como resultado
    let result = new Observable<Array<Atleta>>(observer => {

      //cria lista a ser populada com o retorno do http
      let lista = new Array<Atleta>();

      //faz requisição http da url do servidor retornando 10 resultados
      this.http.get(this.urlServico + '?results=10')
        //trata o resultado como um observable utilizando o subscribe
        .subscribe(response => {
          //passa o resultado para objeto utilizando o "json()" 
          //faz um foreach na propriedade results
          response.json().results.forEach(element => {
            //adiciona cada elemento na lista 
            //transformando em um objeto da classe Atleta
            lista.push({
              nome: `${element.name.first} ${element.name.last}`, //utilizando javascript template string para formatar o nome do atleta
              sexo: element.gender == 'male' ? 'masculino' : 'feminino', //utilizando if ternario para tratar o genero do atleta deixando-o em portugues
              dataNascimento: new Date(element.dob), //transforma a data de string para objeto de Date
              esporte: esporte //atribui o esporte do atleta de acordo com o esporte passado como parametro 
            })
          });

          //conclui tarefa chamando o next 
          observer.next(lista)

        })

    });


    return result;

  }


}
