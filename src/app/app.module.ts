import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserItemsComponent } from './user-items/user-items.component';
import { SearchUserPipe } from './search-user.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageService} from './image/shared/image.service';
import { ImageFilterPipe} from './image/shared/filter.pipe';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';


const appRoutes:Routes = [
  {
     path:'',
     component: LoginComponent
  },
  {
     path:'home',
     component: HomeComponent
  },
  {
     path:'createUser',
     component: CreateUserComponent
  },
  {
     path:'gallery',
     component: GalleryComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserItemsComponent,
    SearchUserPipe,
    UserDetailsComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    ImageFilterPipe,
    LoginComponent,
    CreateUserComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ImageService,ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule{ }
