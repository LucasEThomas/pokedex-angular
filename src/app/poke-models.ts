
export type URL = String | null

export interface Pokemon {
  name: String
  url: URL
}

export interface PokeList {
  count: number
  next: URL
  previous: URL
  results: Pokemon[]
}

export interface PokeDetails {
  name: string
	image: URL
	moves: string[]
	weight: number
}
