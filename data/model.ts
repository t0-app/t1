export interface CharacterLocation {
  name: string;
  url: string;
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
