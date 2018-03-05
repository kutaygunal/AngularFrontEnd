import { Component} from '@angular/core';
import { ImageService } from './shared/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent{

  constructor(private ImageService: ImageService) { }

}
