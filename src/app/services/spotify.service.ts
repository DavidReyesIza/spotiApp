import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){


    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBpdVdH2JY46ldbXm1ApNBbHPPxjqOQGJxQH-r7pnTqIbNwoULVWLVaOmxK_nBSPjsCyKo0mMf-eK0-lbg'
      });

      return this.http.get(url,{headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map(data =>{

      return data['albums'].items;
    }));

  }

  getArtistas(termino:string){

    return this.getQuery(`search?q=${ termino }&type=artist&market=US&limit=10&offset=5`)
    .pipe(map(data=> data['artists'].items));

    // se debe usar el return despues de la funcion de flecha si el codigo va a tener varias lineas

  }


  getArtista(id:string){

    return this.getQuery(`artists/${id}`);
    //.pipe(map(data=> data['artists'].items));

    // se debe usar el return despues de la funcion de flecha si el codigo va a tener varias lineas

  }

  getTopTracks(id:string){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe(map(data=> data['tracks']));

    // se debe usar el return despues de la funcion de flecha si el codigo va a tener varias lineas

  }



}
