import { Component, OnInit } from '@angular/core';
import { ResponsePokemon } from 'src/app/models/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-llist',
  templateUrl: './pokemon-llist.component.html',
  styleUrls: ['./pokemon-llist.component.scss']
})
export class PokemonLlistComponent implements OnInit {

  pokemons: ResponsePokemon[];

  constructor(private pokemonService: PokemonService) {
    this.pokemons = [];
  }

  ngOnInit(): void {
    this.obtenerListaPokemons();
  }

  obtenerListaPokemons() {
    this.pokemonService.getAll().subscribe(
      (response: ResponsePokemon[]) => {
        this.pokemons = response
      }
    )
  }

}
