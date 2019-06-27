import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero.service';
import { PowerService } from '../services/power.service';
import { Power } from '../models/power.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  // styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  powers: Power[];
  heroPowers: Power[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private powerService: PowerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getPowersList();
    this.getHeroPowers();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  getPowersList(): void {
    this.powerService.getAllPowers()
      .subscribe(powers => this.powers = powers);
  }

  getHeroPowers(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroPowers(id)
      .subscribe(heroPowers => this.hero.powers = heroPowers);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  addPower(): void {
    alert('Add hero power...');
  }
}

