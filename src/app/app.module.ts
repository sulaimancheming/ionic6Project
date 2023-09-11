import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { HttpClientModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    provideFirebaseApp(() => initializeApp({
        apiKey: 'AIzaSyAv0rOuWoZ56TQxKnmuM70UlIEhpYosUm4',
        authDomain: 'ionic6project-45e6b.firebaseapp.com',
        projectId: 'ionic6project-45e6b',
        storageBucket: 'ionic6project-45e6b.appspot.com',
        messagingSenderId: '106331123346',
        appId: '1:106331123346:web:1a9348e98dd8c8275d804b'})),
    provideFirestore(() => getFirestore())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
