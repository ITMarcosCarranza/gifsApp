import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey:string = 'X7vlIwxJWf6l9NltK90JVmax6hOYtBZG';
  private _historial:string[]=[];

  resultados:any =[];

  constructor(private http:HttpClient) { }

  get historial(){
    return [...this._historial];
  }

  buscarGifs(termino:string){

    termino = termino.trim().toLowerCase();

    if(!this._historial.includes(termino)){
      this._historial.unshift(termino);
      this._historial= this._historial.splice(0,10);
    }
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${termino}&limit=10`)
    .subscribe((resp:any) =>{
      console.log(resp.data)
      this.resultados= resp.data;
    });
  }


}
