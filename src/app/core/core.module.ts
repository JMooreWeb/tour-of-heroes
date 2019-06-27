import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './not-found.component';

const components = [
  NotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule, // because we use <router-outlet> and routerLink
    SharedModule
  ],
  exports: [FontAwesomeModule, components],
  declarations: [components]
})
export class CoreModule {}
