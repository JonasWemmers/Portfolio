import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadSectionComponent } from './head-section/head-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { MyWorkComponent } from './mywork/mywork.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { PopupMenuComponent } from './popup-menu/popup-menu.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HeadSectionComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'skillset', component: SkillsetComponent },
  { path: 'projects', component: MyWorkComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'impressum', component: ImpressumComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeadSectionComponent,
    AboutMeComponent,
    SkillsetComponent,
    MyWorkComponent,
    ContactFormComponent,
    ContactFormComponent,
    FooterComponent,
    PopupMenuComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes) // Hier füge die RouterModule-Konfiguration hinzu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
