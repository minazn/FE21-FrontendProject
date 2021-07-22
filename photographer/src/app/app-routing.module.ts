import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EventsComponent } from './events/events.component';
import { NatureComponent } from './nature/nature.component';
import { PeopleComponent } from './people/people.component';
import { UrbanComponent } from './urban/urban.component';
import { WeddingComponent } from './wedding/wedding.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutMeComponent,
  },
  {
    path: 'gallery/events',
    component: EventsComponent,
  },
  {
    path: 'gallery/nature',
    component: NatureComponent,
  },
  {
    path: 'gallery/people',
    component: PeopleComponent,
  },
  {
    path: 'gallery/urban',
    component: UrbanComponent,
  },
  {
    path: 'gallery/wedding',
    component: WeddingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
