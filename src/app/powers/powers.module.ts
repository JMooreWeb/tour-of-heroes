import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowersComponent } from './powers/powers.component';
import { PowerListComponent } from './power-list/power-list.component';
import { PowerDetailComponent } from './power-detail/power-detail.component';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PowersRoutingModule } from './powers-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PowersRoutingModule,
    SharedModule
  ],
    exports: [
    RouterModule,
    PowersComponent
  ],
  declarations: [
    PowersComponent,
    PowerListComponent,
    PowerDetailComponent
  ]
})
export class PowersModule {}


// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     HeroesRoutingModule,
//     SharedModule
//   ],
//   exports: [
//     RouterModule,
//     HeroesComponent
//   ],
//   declarations: [
//     HeroesComponent,
//     HeroListComponent,
//     HeroDetailComponent
//   ]
// })
// export class HeroesModule {}
