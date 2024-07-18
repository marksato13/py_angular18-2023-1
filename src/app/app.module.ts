/*------------------------MÓDULO PRINCIPAL(el que almacena un conjunto de componentes)------------ */
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';


@NgModule({ declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        provideFirebaseApp(() => initializeApp({ "projectId": "filesvinculacion", "appId": "1:227431904087:web:1fb51d5623df2635964412", "storageBucket": "filesvinculacion.appspot.com", "apiKey": "AIzaSyClu9bhNZKCTzYMMhA7xxMwHUK78-mfwSs", "authDomain": "filesvinculacion.firebaseapp.com", "messagingSenderId": "227431904087", "measurementId": "G-18Z0GSS32K" })),
        provideStorage(() => getStorage())], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
