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
  newFilm: Film = new Film();
  editFilm = null;
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

  addFilm() {
    this.newFilm.id = this.generateId();
    this.films.push(this.newFilm);
    this.newFilm = new Film();
  }

  setEditFilm() {
    console.log(this.selected);
    this.editFilm = Object.assign({}, this.selected);
    console.log(this.editFilm);
  }

  generateId() {
    return this.films[this.films.length - 1].id + 1;
  }

  updateFilm(film) {
    const id = film.id - 1;
    this.films[id].title = film.title;
    this.films[id].description = film.description;
    this.films[id].releaseYear = film.releaseYear;
    this.films[id].rentalRate = film.rentalRate;
    this.films[id].length = film.length;
    this.films[id].replacementCost = film.replacementCost;
    this.films[id].rating = film.rating;
    this.films[id].language = film.language;
    this.editFilm = null;

  }

  deleteFilm() {
    const id = this.selected.id - 1;
    this.films.splice(id, 1);
    this.selected = null;
  }

  constructor() {}

  ngOnInit() {}
}
