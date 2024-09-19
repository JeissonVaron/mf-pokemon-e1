import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResponsePokemon[]>{
    return this.http.get<ResponsePokemon[]>('https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon.json');
  }
}
