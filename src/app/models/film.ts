export class Film {
  id: number;
  title: string;
  description: string;
  releaseYear: number;
  rentalRate: number;
  length: number;
  replacementCost: number;
  rating: string;
  language: string;
  actors = [];
  categories = [];
  stores = [];
  copies = [];

  constructor(
    id?: number,
    title?: string,
    description?: string,
    releaseYear?: number,
    rentalRate?: number,
    length?: number,
    replacementCost?: number,
    rating?: string,
    language?: string,
    actors?,
    categories?,
    stores?,
    copies?
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.releaseYear = releaseYear;
    this.rentalRate = rentalRate;
    this.length = length;
    this.replacementCost = replacementCost;
    this.rating = rating;
    this.language = language;
    this.actors = actors;
    this.categories = categories;
    this.stores = stores;
    this.copies = copies;
  }
}
