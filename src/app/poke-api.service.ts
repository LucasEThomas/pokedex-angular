import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeDetails, PokeList } from './poke-models';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

const pokeBaseUrl = 'https://pokeapi.co/api/v2'

@Injectable({ providedIn: 'root' })
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getPokeList(offset: number, limit: number) {
    return this.http.get<PokeList>(pokeBaseUrl + `/pokemon/?offset=${offset}&limit=${limit}`)
  }
  
  getSpriteUrl(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }

  getPokeDetails(id: number): Observable<PokeDetails> {
    return this.http.get<IncompletePokeDetails>(pokeBaseUrl + `/pokemon/${id}/`).pipe(
      map( data => ({
        name: data.name,
        weight: data.weight,
        moves: data.abilities.map(abilityData => abilityData.ability.name),
        image: this.getSpriteUrl(id),
      }))
    )
  }
}

interface IncompletePokeDetails {
  name: string
  weight: number,
  abilities: any[]
}