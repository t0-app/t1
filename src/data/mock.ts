import { Character, Episode, Location } from './model';

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
    'https://rickandmortyapi.com/api/episode/3',
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

export const CHARACTER_4: Character = {
  id: 4,
  name: 'Beth Smith',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Female',
  origin: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  location: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
  episode: [],
  url: 'https://rickandmortyapi.com/api/character/4',
  created: '2017-11-04T19:22:43.665Z',
};

export const CHARACTER_7: Character = {
  id: 7,
  name: 'Abradolf Lincler',
  status: 'unknown',
  species: 'Human',
  type: 'Genetic experiment',
  gender: 'Male',
  origin: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  location: {
    name: 'Testicle Monster Dimension',
    url: 'https://rickandmortyapi.com/api/location/21',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/10',
    'https://rickandmortyapi.com/api/episode/11',
  ],
  url: 'https://rickandmortyapi.com/api/character/7',
  created: '2017-11-04T19:59:20.523Z',
};

export const LOCATION_1: Location = {
  id: 1,
  name: 'Earth (C-137)',
  type: 'Planet',
  dimension: 'Dimension C-137',
  residents: [
    'https://rickandmortyapi.com/api/character/38',
    'https://rickandmortyapi.com/api/character/45',
    'https://rickandmortyapi.com/api/character/71',
  ],
  url: 'https://rickandmortyapi.com/api/location/1',
  created: '2017-11-10T12:42:04.162Z',
};

export const LOCATION_2: Location = {
  id: 2,
  name: 'Abadango',
  type: 'Cluster',
  dimension: 'unknown',
  residents: ['https://rickandmortyapi.com/api/character/6'],
  url: 'https://rickandmortyapi.com/api/location/2',
  created: '2017-11-10T13:06:38.182Z',
};

export const LOCATION_3: Location = {
  id: 3,
  name: 'Citadel of Ricks',
  type: 'Space station',
  dimension: 'unknown',
  residents: [
    'https://rickandmortyapi.com/api/character/1',
    'https://rickandmortyapi.com/api/character/2',
  ],
  url: 'https://rickandmortyapi.com/api/location/3',
  created: '2017-11-10T13:08:13.191Z',
};

export const EPISODE_1: Episode = {
  id: 1,
  name: 'Pilot',
  air_date: 'December 2, 2013',
  episode: 'S01E01',
  characters: [
    'https://rickandmortyapi.com/api/character/1',
    'https://rickandmortyapi.com/api/character/2',
  ],
  url: 'https://rickandmortyapi.com/api/episode/1',
  created: '2017-11-10T12:56:33.798Z',
};

export const EPISODE_2: Episode = {
  id: 2,
  name: 'Lawnmower Dog',
  air_date: 'December 9, 2013',
  episode: 'S01E02',
  characters: [
    'https://rickandmortyapi.com/api/character/3',
    'https://rickandmortyapi.com/api/character/4',
  ],
  url: 'https://rickandmortyapi.com/api/episode/2',
  created: '2017-11-10T12:56:33.916Z',
};

export const EPISODE_3: Episode = {
  id: 3,
  name: 'Anatomy Park',
  air_date: 'December 16, 2013',
  episode: 'S01E03',
  characters: [
    'https://rickandmortyapi.com/api/character/1',
    'https://rickandmortyapi.com/api/character/2',
    'https://rickandmortyapi.com/api/character/3',
    'https://rickandmortyapi.com/api/character/7',
  ],
  url: 'https://rickandmortyapi.com/api/episode/3',
  created: '2017-11-10T12:56:34.022Z',
};
