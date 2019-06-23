import { Hero } from './models/hero.model';
import { Power } from './models/power.model';

export const HEROES: Hero[] = [
  { id: 10, name: 'mock-heroes' },
  { id: 11, name: 'Iron-Man' },
  { id: 12, name: 'Spider-Man' },
  { id: 13, name: 'Hulk' },
  { id: 14, name: 'Thor' },
  { id: 15, name: 'Black Panther' },
  { id: 16, name: 'Captain America' },
  { id: 17, name: 'Captain Marvel' },
  { id: 18, name: 'Dr Strange' },
  { id: 19, name: 'Vision' },
  { id: 20, name: 'Scarlet Witch' }
];

export const POWERS: Power[] = [
  { id: 101, name: 'Flying' },
  { id: 102, name: 'Super Strength' },
  { id: 103, name: 'X-Ray Vision' },
  { id: 104, name: 'Cold Breath' },
  { id: 105, name: 'Super Speed' },
  { id: 106, name: 'Agility' },
  { id: 107, name: 'Heat Vision' },
  { id: 109, name: 'Reflexes' },
  { id: 110, name: 'Healing' },
];