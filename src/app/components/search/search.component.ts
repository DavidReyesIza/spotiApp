import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.loading= true;
    if(termino.length > 0){

      console.log(termino);
      this.spotify.getArtistas(termino)
      .subscribe((data : any) =>{
        console.log(data);
        this.artistas= data;
        this.loading=false;
      });

    } else{
      this.loading=false;
    }



  }

}
