import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PowersComponent } from './powers/powers.component';
import { PowerDetailComponent } from './power-detail/power-detail.component';
import { PowerListComponent } from './power-list/power-list.component';
import { PowerDetailResolverService } from './power-detail-resolver.service';
import { CanDeactivateGuard } from '../can-deactivate.guard';

// const heroesRoutes: Routes = [
//   { path: 'heroes', redirectTo: '/superheroes' },
//   { path: 'hero/:id', redirectTo: '/superhero/detail/:id' },
//   { path: 'superheroes',  component: HeroesComponent },
//   { path: 'superhero/detail/:id', component: HeroDetailComponent }
// ];

const powerRoutes: Routes = [
  { path: '', component: PowersComponent },
  { path: 'powers', component: PowersComponent },
  { path: 'power/:id',  component: PowerDetailComponent },
];

// const powerRoutes: Routes = [
//   {
//     path: '',
//     component: PowersComponent,
//     children: [
//       {
//         path: '',
//         component: PowerListComponent,
//         children: [
//           {
//             path: ':id',
//             component: PowerDetailComponent,
//             canDeactivate: [CanDeactivateGuard],
//             resolve: {
//               powers: PowerDetailResolverService
//             }
//           },
//           {
//             path: '',
//             component: PowersComponent
//           }
//         ]
//       }
//     ]
//   },
// ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(powerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PowersRoutingModule { }
