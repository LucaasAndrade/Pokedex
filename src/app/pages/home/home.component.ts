import { Component, OnInit, ViewChild } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../components/search/search.component';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, SearchComponent, ListComponent],
  standalone: true
})
export class HomeComponent implements OnInit {
  @ViewChild(ListComponent) listComponent!: ListComponent;
  public pokemonTypes: any[] = [];

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.getPokemonTypes().subscribe(
      (res: any) => {
        this.pokemonTypes = res.results;
      }
    );
  }

  public search(value: string): void {
    this.listComponent.searchPokemon(value);
  }

  public filterByType(type: string): void {
    this.listComponent.filterPokemonByType(type);
  }

  public clearSearch(): void {
    this.listComponent.getPokemons();
  }
}