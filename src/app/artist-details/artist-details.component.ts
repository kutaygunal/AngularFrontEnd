import { Component} from '@angular/core';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  inputs: ['artist'],
  styleUrls: ['./artist-details.component.css']

 })

export class ArtistDetailsComponent{

  showSelected: boolean;

  ShowButton() {
    this.showSelected = true;
   }
   HideButton() {
    this.showSelected = false;
   }

}
