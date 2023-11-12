import { Component, OnInit } from '@angular/core';
import { DiccionarioService } from 'src/app/servicios/diccionario/diccionario.service';
import { AlfabetoService } from 'src/app/servicios/alfabeto/alfabeto.service';

@Component({
  selector: 'app-content-diccionario',
  templateUrl: './content-diccionario.component.html',
  styleUrls: ['./content-diccionario.component.css']
})
export class ContentDiccionarioComponent implements OnInit{

  diccionario: any;
  alfabeto: any;

  constructor(private DiccionarioService: DiccionarioService, private AlfabetoService: AlfabetoService){ }

  ngOnInit() {

    this.AlfabetoService.getAlfabeto().subscribe(
      {
        next: (data: any)=>{
          this.alfabeto = data["alfabeto"];
          console.log(data)
        },

        error:(err: any)=>{
          alert("Se ha producido un error. Por favor, intente nuevamente.");
          console.log(err)
        }
      }
    );

    this.DiccionarioService.getDiccionario().subscribe(
      {
        next: (data: any)=>{
          this.diccionario = data["diccionario"];
          console.log(data)
        },

        error:(err: any)=>{
          alert("Se ha producido un error. Por favor, intente nuevamente.");
          console.log(err)
        }
      }
    );
  }
}
