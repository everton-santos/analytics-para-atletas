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
import { ListaAtletasComponent } from './componentes/lista-atletas/lista-atletas.component';
import { AtletaDetalheComponent } from './componentes/atleta-detalhe/atleta-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAtletasComponent,
    AtletaDetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [AtletaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
