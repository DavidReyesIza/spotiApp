import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {

    this.loading=true;
    this.error=false;

    this.spotify.getNewReleases()
    .subscribe((data:any) => {
    console.log(data);
    this.nuevasCanciones=data;
    this.loading=false;
    },(errorServicio) =>{

      this.error = true
      this.mensajeError= errorServicio.error.error.message;

    });

   }

  ngOnInit(): void {
  }

}
