import{Component}from'@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
  `
    .list-group-item:first-child{
       border-top-left-radius : 0;
       border-top-right-radius : 0;
       border-top : 0;
    }

    #headerImage{
        float: right;
        width: 19%;
        margin-top: 10px;
        border-style: solid;
        border-width: medium;
        border-color: black;
        border-radius: 50%;
  }
     #accountName{
        float: right;
        color: black;
        margin-right: 20px;
        margin-top: 40px;
  }
  `
  ]
 })
export class AppComponent{
}
