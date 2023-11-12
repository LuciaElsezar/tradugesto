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
  inputTexto = '';
  inputSenaEspanol:any;
  inputSenaPalabra: any;
  inputSenaUniversal:any;
  asd: any;

  constructor(private DiccionarioService: DiccionarioService, private AlfabetoService: AlfabetoService){ }

  ngOnInit() {

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
  }

  traducir(input: string){
    this.inputSenaEspanol = []
    this.inputTexto = input.toUpperCase()
    for(let iPalabra = 0; iPalabra < input.length; iPalabra++){
      for(let iAlfabeto = 0; iAlfabeto < this.alfabeto.length; iAlfabeto++){
        if(this.inputTexto[iPalabra] == this.alfabeto[iAlfabeto].nombre){
          this.inputSenaEspanol.push(this.alfabeto[iAlfabeto].senaEspanol)
        }
      }
    }
  }

  buscar(input: string){
    this.inputSenaPalabra = ''
    this.inputTexto = input.toLowerCase()
    for(let iDiccionario = 0; iDiccionario < this.diccionario.length; iDiccionario++){
      if(this.inputTexto == this.diccionario[iDiccionario].palabra){
        this.inputSenaPalabra = this.diccionario[iDiccionario].senaEspanol
      }
    }
  }

}
