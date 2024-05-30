import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<any>('https://www.omdbapi.com/?s=star&apikey=5d8ee22f').pipe(
      map(response => {
        if (response && response.Search) {
          return response.Search;
        } else {
          console.error('No se encontró la propiedad "Search" en la respuesta de la API.');
          return [];
        }
      })
    );
  }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>('https://www.omdbapi.com/?i=' + id + '&apikey=5d8ee22f');
  }
}