import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import { PokeList, PokeDetails } from './poke-models'
import { Injectable } from '@angular/core'
import { PageEvent } from '@angular/material/paginator'

import { PokeApiService } from './poke-api.service'
import { PokeDialogComponent } from './poke-dialog/poke-dialog.component';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'pokedex-angular'
  offset = 0
  limit = 10
  pokeDetails: PokeDetails | null = null
  pokeList: PokeList | null = null

  constructor(private pokeApi: PokeApiService, private dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.getPokeList()
  }

  getSpriteUrl(index: number) {
    return this.pokeApi.getSpriteUrl(index + this.offset)
  }

  getPage({pageSize, pageIndex}: PageEvent) {
    this.getPokeList(pageSize * pageIndex)
  }
  
  openPokemonDetailsDialog(index: number) {
    this.dialog.open(PokeDialogComponent, {
      data: {
        id: index + this.offset
      }
    })
  }

  getPokeList(offset = this.offset, limit = this.limit) {
    this.offset = offset
    this.limit = limit
    this.pokeApi.getPokeList(this.offset, this.limit)
    .subscribe( pokeList => this.pokeList = pokeList)
  }
}
