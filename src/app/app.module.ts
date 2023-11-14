import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContentAlfabetoComponent } from './componentes/content-alfabeto/content-alfabeto.component';
import { ContentTraductorComponent } from './componentes/content-traductor/content-traductor.component';
import { ContentDiccionarioComponent } from './componentes/content-diccionario/content-diccionario.component';
import { IndexComponent } from './pantallas/index/index.component';
import { DiccionarioComponent } from './pantallas/diccionario/diccionario.component';
import { TraductorComponent } from './pantallas/traductor/traductor.component';
import { AlfabetoComponent } from './pantallas/alfabeto/alfabeto.component';
import { HeroComponent } from './componentes/hero/hero.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'alfabeto', component: AlfabetoComponent},
  {path: 'diccionario', component: DiccionarioComponent},
  {path: 'traductor', component: TraductorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentAlfabetoComponent,
    ContentTraductorComponent,
    ContentDiccionarioComponent,
    IndexComponent,
    DiccionarioComponent,
    TraductorComponent,
    AlfabetoComponent,
    HeroComponent
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
