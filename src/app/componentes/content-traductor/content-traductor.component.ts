import { Component, OnInit } from '@angular/core';
import { DiccionarioService } from 'src/app/servicios/diccionario/diccionario.service';
import { AlfabetoService } from 'src/app/servicios/alfabeto/alfabeto.service';

@Component({
  selector: 'app-content-traductor',
  templateUrl: './content-traductor.component.html',
  styleUrls: ['./content-traductor.component.css']
})
export class ContentTraductorComponent implements OnInit{

  diccionario: any;
  alfabeto: any;

  inputTexto = '';
  inputSenaEspanol:any;
  inputSenaUniversal:any;

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
}
