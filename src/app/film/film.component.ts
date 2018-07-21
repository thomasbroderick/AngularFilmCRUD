import { Actor } from './../models/actor';
import { Film } from './../models/film';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  selected = null;
  films = [
    new Film(
      1,
      'ACADEMY DINOSAUR',
      'A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies',
      1993,
      0.99,
      86,
      20.99,
      'PG',
      'Japanese',
      [new Actor(1, 'Penelope', 'Guiness'), new Actor(10, 'Christian', 'Gable')]
    )
  ];

  displayFilm(film) {
  this.selected = film;
  }

  constructor() {}

  ngOnInit() {}
}
