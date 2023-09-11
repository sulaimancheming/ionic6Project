import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MygalleryPage } from './mygallery.page';

const routes: Routes = [
  {
    path: '',
    component: MygalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MygalleryPageRoutingModule {}
