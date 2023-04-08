import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey:string = 'X7vlIwxJWf6l9NltK90JVmax6hOYtBZG';
  private _historial:string[]=[];

  resultados:any =[];

  constructor(private http:HttpClient) { 

    if(localStorage.getItem('historial')){
      this._historial =JSON.parse(localStorage.getItem('historial')!);
      
    }
    this.resultados =JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  get historial(){
    return [...this._historial];
  }

  buscarGifs(termino:string){

    termino = termino.trim().toLowerCase();

    if(!this._historial.includes(termino)){
      this._historial.unshift(termino);
      this._historial= this._historial.splice(0,10);
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${termino}&limit=10`)
    .subscribe((resp:any) =>{
      console.log(resp.data)
      this.resultados= resp.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados));
    });
  }


}
