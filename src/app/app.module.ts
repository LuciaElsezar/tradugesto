import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContentAlfabetoComponent } from './componentes/content-alfabeto/content-alfabeto.component';
import { ContentTraductorComponent } from './componentes/content-traductor/content-traductor.component';
import { ContentDiccionarioComponent } from './componentes/content-diccionario/content-diccionario.component';
import { IndexComponent } from './pantallas/index/index.component';
import { AlfabetoComponent } from './pantallas/alfabeto/alfabeto.component';
import { DiccionarioComponent } from './pantallas/diccionario/diccionario.component';
import { TraductorComponent } from './pantallas/traductor/traductor.component';

const routes: Routes = [
  {path: '', component: IndexComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentAlfabetoComponent,
    ContentTraductorComponent,
    ContentDiccionarioComponent,
    IndexComponent,
    AlfabetoComponent,
    DiccionarioComponent,
    TraductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
