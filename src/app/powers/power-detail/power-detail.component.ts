import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Power } from '../models/power.model';
import { PowerService } from '../services/power.service';

@Component({
  selector: 'app-power-detail',
  templateUrl: './power-detail.component.html',
  // styleUrls: ['./power-detail.component.css']
})
export class PowerDetailComponent implements OnInit {
  @Input() power: Power;

  constructor(
    private route: ActivatedRoute,
    private heroPowerService: PowerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroPower();
  }

  getHeroPower(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroPowerService.getPower(id)
      .subscribe(power => this.power = power);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroPowerService.updatePower(this.power)
      .subscribe(() => this.goBack());
  }
}

