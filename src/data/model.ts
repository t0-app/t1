export interface CharacterLocation {
  name: string;
  url: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface Character {
  id: number;
  name: string;
  species: string;
  type: string;
  status: string;
  location: CharacterLocation;
  origin: CharacterLocation;
  gender: string;
  episode: string[];
  image: string;
  url: string;
  created: string;
}

export interface Episode {
  id: number;
  name: string;
  episode: string;
  air_date: string;
  characters: string[];
  url: string;
  created: string;
}
