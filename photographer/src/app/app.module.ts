import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NatureComponent } from './nature/nature.component';
import { EventsComponent } from './events/events.component';
import { WeddingComponent } from './wedding/wedding.component';
import { PeopleComponent } from './people/people.component';
import { UrbanComponent } from './urban/urban.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CustomerComponent } from './customer/customer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioComponent,
    ContactComponent,
    AboutMeComponent,
    TestimonialsComponent,
    NatureComponent,
    EventsComponent,
    WeddingComponent,
    PeopleComponent,
    UrbanComponent,
    AboutMeComponent,
    CustomerComponent,
    TestimonialsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
