import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingContainerComponent } from './LandingPage/landing-container/landing-container.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ArchiefComponent } from './archief/archief.component';

const routes: Routes = [
  { path: '', component: LandingContainerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq' , component: FaqComponent },
  { path: 'archief', component:ArchiefComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
