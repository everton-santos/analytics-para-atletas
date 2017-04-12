import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { AtletaService } from './servicos/atleta.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import 'hammerjs';
import { ChartsModule } from 'ng2-charts';


import { ListaAtletasComponent } from './componentes/lista-atletas/lista-atletas.component';
import { AtletaDetalheComponent } from './componentes/atleta-detalhe/atleta-detalhe.component';
import { AtletasComponent } from './componentes/atletas/atletas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAtletasComponent,
    AtletaDetalheComponent,
    AtletasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule, 
    RouterModule.forRoot(routes),
    ChartsModule
  ],
  providers: [AtletaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
