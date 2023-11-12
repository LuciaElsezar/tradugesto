import { Component, OnInit } from '@angular/core';
import { AlfabetoService } from 'src/app/servicios/alfabeto/alfabeto.service';

@Component({
  selector: 'app-content-alfabeto',
  templateUrl: './content-alfabeto.component.html',
  styleUrls: ['./content-alfabeto.component.css']
})
export class ContentAlfabetoComponent implements OnInit{

  alfabeto: any;

  constructor(private AlfabetoService: AlfabetoService){ }

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
    )
  }
}
