import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    SharedModule
  ],
  exports: [
    RouterModule,
    HeroesComponent
  ],
  declarations: [
    HeroesComponent,
    HeroListComponent,
    HeroDetailComponent
  ]
})
export class HeroesModule {}
