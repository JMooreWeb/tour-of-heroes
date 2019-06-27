import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/hero.model';
import { Power } from '../models/power.model';

@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: 'in-memory-data' },
      { id: 11, name: 'Iron-Man' },
      { id: 12, name: 'Spider-Man', powers: { id: 102, name: 'Super Strength' }},
      { id: 13, name: 'Hulk' },
      { id: 14, name: 'Thor' },
      { id: 15, name: 'Black Panther' },
      { id: 16, name: 'Captain America' },
      { id: 17, name: 'Captain Marvel' },
      { id: 18, name: 'Dr Strange' },
      { id: 19, name: 'Vision' },
      { id: 20, name: 'Scarlet Witch' },
    ];

    const powers = [
      { id: 100, name: 'in-memory-data' },
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

    const heroPowers = [
      { id: 1001, heroId: 12, powerId: 102 },
      { id: 1002, heroId: 12, powerId: 106 },
      { id: 1003, heroId: 12, powerId: 109 },
      { id: 1004, heroId: 12, powerId: 110 },
    ];

    return { heroes, powers, heroPowers };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genHeroId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  genPowerId(powers: Power[]): number {
    return powers.length > 0 ? Math.max(...powers.map(power => power.id)) + 1 : 101;
  }
}
