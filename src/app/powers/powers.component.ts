import { Component, OnInit } from '@angular/core';

import { Power } from '../models/power.model';
import { PowerService } from '../services/power.service';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css']
})
export class PowersComponent implements OnInit {
  powers: Power[];

  constructor(private powerService: PowerService) { }

  ngOnInit() {
    this.getAllPowers();
  }

  getAllPowers() {
    this.powerService.getAllPowers()
    .subscribe(powers => this.powers = powers);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.powerService.addPower({ name } as Power)
      .subscribe(power => {
        this.powers.push(power);
      });
  }

  delete(power: Power) {
    this.powers = this.powers.filter(p => p !== power);
    this.powerService.deletePower(power).subscribe();
  }

}
