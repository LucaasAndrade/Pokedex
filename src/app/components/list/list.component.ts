import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class ListComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  public offset: number = 0;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons(): void {
    this.pokeApiService.apiListAllPokemon(this.offset, 20).subscribe(
      (res: any) => {
        this.pokemons = res;
        this.pokemons.forEach((pokemon: any) => {
          this.pokeApiService.apiGetPokemon(pokemon.url).subscribe(
            (pokemonDetails: any) => {
              pokemon.status = pokemonDetails;
            }
          );
        });
      }
    );
  }

  public nextPage(): void {
    this.offset += 20;
    this.getPokemons();
  }

  public previousPage(): void {
    if (this.offset > 0) {
      this.offset -= 20;
      this.getPokemons();
    }
  }

  public searchPokemon(value: string): void {
    this.pokeApiService.apiGetPokemon(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`).subscribe(
      (pokemonDetails: any) => {
        this.pokemons = [{
          name: pokemonDetails.name,
          url: `https://pokeapi.co/api/v2/pokemon/${pokemonDetails.id}/`,
          status: pokemonDetails
        }];
      }
    );
  }

  public filterPokemonByType(type: string): void {
    if (type === 'all') {
      this.offset = 0;
      this.getPokemons();
      return;
    }

    this.pokeApiService.getPokemonsByType(type).subscribe(
      (res: any) => {
        this.pokemons = res.pokemon.map((p: any) => p.pokemon);
        this.pokemons.forEach((pokemon: any) => {
          this.pokeApiService.apiGetPokemon(pokemon.url).subscribe(
            (pokemonDetails: any) => {
              pokemon.status = pokemonDetails;
            }
          );
        });
      }
    );
  }
}