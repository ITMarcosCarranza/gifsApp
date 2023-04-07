import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../servicios/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

@ViewChild('txtBuscar')txtBuscar!:ElementRef<HTMLInputElement>;

constructor(private gifsService:GifsService) {
}

  buscar(query:string){
    this.gifsService.buscarGifs(query);
    console.log(this.gifsService.historial);
    this.txtBuscar.nativeElement.value='';
  }
}
