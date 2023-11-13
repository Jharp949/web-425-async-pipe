import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId: 100, fullName: "Bedřich Smetana", genre: "Romantic"},
      {composerId: 101, fullName: "Sergei Vasilyevich Rachmaninoff", genre: "Romantic"},
      {composerId: 102, fullName: "Igor Stravinsky", genre: "Modern"},
      {composerId: 103, fullName: "Ludwig Van Beethoven", genre: "Classical"},
      {composerId: 104, fullName: "Hans Florian Zimmer", genre: "Post Modern"}
    ]
  }
// Return the array of composers with observable
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}


