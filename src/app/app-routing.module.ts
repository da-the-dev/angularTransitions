import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FadeComponent } from './fade/fade.component';
import { ParralaxComponent } from './parralax/parralax.component';
import { SlideComponent } from './slide/slide.component';

const routes: Routes = [
  {
    path: 'parallax',
    component: ParralaxComponent
  },
  {
    path: 'slide',
    component: SlideComponent
  },
  {
    path: 'fade',
    component: FadeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
