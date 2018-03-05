import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ArtistItemsComponent } from './artist-items/artist-items.component';
import { SearchArtistPipe } from './search-artist.pipe';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageService} from './image/shared/image.service';
import { ImageFilterPipe} from './image/shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistItemsComponent,
    SearchArtistPipe,
    ArtistDetailsComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [ImageService,ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
