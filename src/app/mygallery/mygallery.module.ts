import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MygalleryPageRoutingModule } from './mygallery-routing.module';

import { MygalleryPage } from './mygallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MygalleryPageRoutingModule
  ],
  declarations: [MygalleryPage]
})
export class MygalleryPageModule {}
