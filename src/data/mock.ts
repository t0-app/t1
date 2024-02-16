import { Character, Location } from './model';

export const CHARACTER_1: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

export const CHARACTER_2: Character = {
  id: 2,
  name: 'Morty Smith',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'unknown',
    url: '',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  url: 'https://rickandmortyapi.com/api/character/2',
  created: '2017-11-04T18:50:21.651Z',
};

export const CHARACTER_3: Character = {
  id: 14,
  name: 'Alien Morty',
  status: 'unknown',
  species: 'Alien',
  type: '',
  gender: 'Male',
  origin: {
    name: 'unknown',
    url: '',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/10'],
  url: 'https://rickandmortyapi.com/api/character/14',
  created: '2017-11-04T20:51:31.373Z',
};

export const LOCATION_1: Location = {
  id: 1,
  name: 'Earth (C-137)',
  type: 'Planet',
  dimension: 'Dimension C-137',
  residents: [],
  url: 'https://rickandmortyapi.com/api/location/1',
  created: '2017-11-10T12:42:04.162Z',
};

export const LOCATION_2: Location = {
  id: 2,
  name: 'Abadango',
  type: 'Cluster',
  dimension: 'unknown',
  residents: [],
  url: 'https://rickandmortyapi.com/api/location/2',
  created: '2017-11-10T13:06:38.182Z',
};

export const LOCATION_3: Location = {
  id: 3,
  name: 'Citadel of Ricks',
  type: 'Space station',
  dimension: 'unknown',
  residents: [],
  url: 'https://rickandmortyapi.com/api/location/3',
  created: '2017-11-10T13:08:13.191Z',
};
