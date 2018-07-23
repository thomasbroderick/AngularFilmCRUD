import { Actor } from './../models/actor';
import { Film } from './../models/film';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  selectedFilm = null;
  newFilm: Film = new Film();
  editFilm = null;
  selectedActor = null;
  newActor: Actor = new Actor();
  addingToFilm = false;

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

  actors = [new Actor(1, 'James', 'Bond'), new Actor(2, 'Austin', 'Powers')];

  displayFilm(film) {
    this.selectedFilm = film;
  }

  addFilm() {
    this.newFilm.id = this.generateId();
    this.films.push(this.newFilm);
    this.newFilm = new Film();
  }

  setEditFilm() {
    console.log(this.selectedFilm);
    this.editFilm = Object.assign({}, this.selectedFilm);
    console.log(this.editFilm);
  }

  generateId() {
    return this.films[this.films.length - 1].id + 1;
  }

  generateActorId() {
    return this.actors[this.actors.length - 1].id + 1;
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
    const id = this.selectedFilm.id - 1;
    this.films.splice(id, 1);
    this.selectedFilm = null;
  }

  displayActor(actor) {
    this.selectedActor = actor;
  }

  addActor() {
    this.newActor.id = this.generateActorId();
    this.actors.push(this.newActor);
    this.newActor = new Actor();
  }

  deleteActor() {
    const id = this.selectedActor.id - 1;
    this.actors.splice(id, 1);
    this.selectedActor = null;
  }

  nextFilmLoc() {
    return this.selectedActor.films.length;
  }

  addActorToFilm(actor, film) {
    film.actors.push(actor);
    this.addingToFilm = false;
  }

  constructor() {}

  ngOnInit() {}
}
