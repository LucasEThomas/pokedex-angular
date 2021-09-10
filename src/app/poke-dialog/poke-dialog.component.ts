import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokeApiService } from '../poke-api.service';
import { PokeDetails } from '../poke-models';

export interface DialogData {
  id: number
}

@Component({
  selector: 'app-poke-dialog',
  templateUrl: './poke-dialog.component.html',
  styleUrls: ['./poke-dialog.component.sass']
})


export class PokeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private pokeApi: PokeApiService) { }

  pokemon: PokeDetails | null = null

  ngOnInit(): void {
    this.pokeApi.getPokeDetails(this.data.id).subscribe( pokemon => {
      this.pokemon = pokemon
    })
  }

}
