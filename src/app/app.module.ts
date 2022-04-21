import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TrainingComponent } from './component/training/training.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { PenalityComponent } from './component/penality/penality.component';
import { EventComponent } from './component/event/event.component';
import { DonnationComponent } from './component/donnation/donnation.component';
import { SubjectComponent } from './component/subject/subject.component';
import { ChatComponent } from './component/chat/chat.component';
import { AdvComponent } from './component/adv/adv.component';
import { CondidatComponent } from './component/condidat/condidat.component';
import { ModulesComponent } from './component/modules/modules.component';
import { PartnerComponent } from './component/partner/partner.component';
import { JobComponent } from './component/job/job.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TrainingComponent,
    QuizComponent,
    PenalityComponent,
    EventComponent,
    DonnationComponent,
    SubjectComponent,
    ChatComponent,
    AdvComponent,
    CondidatComponent,
    ModulesComponent,
    PartnerComponent,
    JobComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
