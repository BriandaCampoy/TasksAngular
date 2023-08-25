import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

/**
 * Routes configuration for the layout-related pages.
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        /**
         * The path for the 'task' module.
         */
        path: '',
        redirectTo: 'task',
        pathMatch: 'full',
      },
      {
        /**
         * The path for the 'task' module.
         */
        path: 'task',
        loadChildren: () =>
          import('../tasks/tasks.module').then((m) => m.TasksModule),
      },
      {
        /**
         * The path for the 'profile' module.
         */
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        /**
         * The path for the 'subject' module.
         */
        path: 'subject',
        loadChildren: () =>
          import('../subjects/subjects.module').then((m) => m.SubjectsModule),
      },
    ],
  },
];

/**
 * The routing module for layout-related pages.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
