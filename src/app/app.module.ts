import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// npm i bootstrap bootstrap-icons gsap
import gsap from 'gsap';

import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialsComponent } from './components/socials/socials.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ContactComponent } from './components/contact/contact.component';

import { HttpClientModule } from '@angular/common/http';
import { InterceptorProvider } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    NavbarComponent,
    SocialsComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProyectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
