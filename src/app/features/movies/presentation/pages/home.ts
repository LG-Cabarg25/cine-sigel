import { Component } from "@angular/core";
import { ReusableComponent } from "../components/Botones/reusable-component";
import { ButtonReusable } from "../components/Botones/button-reusable";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import { SectionComponent } from "../components/Botones/section";

@Component({
  selector:'home',
  standalone:true,
  imports: [ Navbar, Footer,SectionComponent],
  template:`
    <app-navbar></app-navbar>
    <app-section></app-section>
    <app-footer></app-footer>
  `

})

export class HomeComponent{

}
