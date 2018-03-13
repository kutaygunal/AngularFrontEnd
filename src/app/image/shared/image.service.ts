import{ Injectable } from '@angular/core'


@Injectable()
export class ImageService{
  visibleImages = [];
  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }
  getImage(id:number){
    return IMAGES.slice(0).find(image => image.id == id)
  }
}
const IMAGES = [
  {"id": 1 , "category" : "boat" , "caption" : "View from the boat", "url" : "assets/images/gallery/boats_01.jpg"},
  {"id": 2 , "category" : "boat" , "caption" : "Sailing", "url" : "assets/images/gallery/boats_02.jpg"},
  {"id": 3 , "category" : "school" , "caption" : "Sunrising", "url" : "assets/images/gallery/school_02.jpg"}
]
