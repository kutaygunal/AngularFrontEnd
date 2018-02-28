import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtist'
})

export class SearchArtistPipe implements
PipeTransform {

  transform(pipeData, pipeModifier): any {
    return pipeData.filter(eachItem => {
    return (
         eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
         eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase())
)
});
}
}
