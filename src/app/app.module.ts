import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import gsap from 'gsap';

import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialsComponent } from './components/socials/socials.component';

import { HomeComponent } from './components/home/home.component';
import { EditHomeComponent } from './components/home/edit-home/edit-home.component';
import { AboutComponent } from './components/about/about.component';

import { ExperienceComponent } from './components/experience/experience.component';
import { NewExperienceComponent } from './components/experience/new-experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience/edit-experience.component';
import { EducationComponent } from './components/education/education.component';
import { NewEducationComponent } from './components/education/new-education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';

import { SkillsComponent } from './components/skills/skills.component';
import { FrontSkillComponent } from './components/front-skill/front-skill.component';
import { NewFrontSkillComponent } from './components/front-skill/new-front-skill/new-front-skill.component';
import { EditFrontSkillComponent } from './components/front-skill/edit-front-skill/edit-front-skill.component';
import { BackSkillComponent } from './components/back-skill/back-skill.component';
import { NewBackSkillComponent } from './components/back-skill/new-back-skill/new-back-skill.component';
import { EditBackSkillComponent } from './components/back-skill/edit-back-skill/edit-back-skill.component';
import { SoftSkillComponent } from './components/soft-skill/soft-skill.component';
import { NewSoftSkillComponent } from './components/soft-skill/new-soft-skill/new-soft-skill.component';
import { EditSoftSkillComponent } from './components/soft-skill/edit-soft-skill/edit-soft-skill.component';

import { ProyectsComponent } from './components/proyects/proyects.component';
import { NewProyectComponent } from './components/proyects/new-proyect/new-proyect.component';
import { EditProyectComponent } from './components/proyects/edit-proyect/edit-proyect.component';

import { ContactComponent } from './components/contact/contact.component';

import { HttpClientModule } from '@angular/common/http';
import { InterceptorProvider } from './services/interceptor.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewSocialComponent } from './components/socials/new-social/new-social.component';
import { EditSocialComponent } from './components/socials/edit-social/edit-social.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    NavbarComponent,
    SocialsComponent,
    HomeComponent,
    EditHomeComponent,
    AboutComponent,
    ExperienceComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    EducationComponent,
    NewEducationComponent,
    EditEducationComponent,
    SkillsComponent,
    FrontSkillComponent,
    NewFrontSkillComponent,
    EditFrontSkillComponent,
    BackSkillComponent,
    NewBackSkillComponent,
    EditBackSkillComponent,
    SoftSkillComponent,
    NewSoftSkillComponent,
    EditSoftSkillComponent,
    ProyectsComponent,
    NewProyectComponent,
    EditProyectComponent,
    ContactComponent,
    NewSocialComponent,
    EditSocialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
