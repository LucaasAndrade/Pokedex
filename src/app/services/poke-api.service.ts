import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Observable
import { map, Observable } from 'rxjs';
import { Pokemon } from '../components/model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private http: HttpClient
  ) { }

  public apiListAllPokemon(offset: number, limit: number): Observable<Pokemon[]> {
    const url = `${this.url}?offset=${offset}&limit=${limit}`;
    return this.http.get<any>(url).pipe(
      map(res => res.results)
    );
  }

  public apiGetPokemon(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  public getPokemonTypes(): Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/type');
  }

  public getPokemonsByType(type: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/type/${type}`);
  }
}
