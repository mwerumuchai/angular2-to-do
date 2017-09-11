import { Component } from '@angular/core';

@Component ({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1> My First Angular 2 App </h1>
    <h3>One of my favorite band is: {{ favoriteBand }}</h3>
    <p>If I had to choose a favorite painter it would be: {{ favoritePainter }}</p>
    <p>The number of slices of pie I would like is: {{ slicesOfPie }}</p>
    <h3>One of my favorite albums is: </h3>
    <p>{{ favoriteAlbum.title }}</p>
    <p>By {{ favoriteAlbum.artist }}</p>
    <p>Released in {{ favoriteAlbum.released }}</p>
  </div>
  `
})

export class AppComponent {
  favoriteBand: string = 'Ani DiFranco';
  favoritePainter: string = 'Van Gogh';
  slicesOfPie: number = 3;
  favoriteAlbum: Album = new Album("Disintegration", "The Cure", 1989);
}

export class Album {
  constructor (public title: string, public artist: string, public released: number) {  }
}
