import { Component } from "@angular/core";
import { ReusableComponent } from "./reusable-component";
import { ButtonReusable } from "./button-reusable";

@Component({
  selector:'app-section',
  imports:[ReusableComponent,ButtonReusable],
  template:`
      <section class="bg-gradient-to-b from-[#915151] via-[#36316F]  to-[#36316F] h-32 flex justify-center  w-full h-200 flex flex-col grid place-content-start ">
        <app-reusable-component class="grid place-content-center"></app-reusable-component>
        <div class="relative w-180 h-90 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24    24" stroke-width="1.5" stroke="currentColor" class="size-14 absolute z-10 top-1/3 text-[#A4A4A4]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-14 absolute z-10 top-1/3  right-2 -traslate-y-1/2 text-[#A4A4A4]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
          </svg>
          <div class="absolute z-10 flex flex-row justify-center place-items-end h-80 w-180  -traslate-y-1/2">
            <div class="bg-white h-5 w-3 rounded-[80px_/_110px] mr-3"></div>
            <div class="bg-blue-500 h-5 w-3 rounded-[80px_/_110px] mr-3"></div>
            <div class="bg-white h-5 w-3 rounded-[80px_/_110px]"></div>
          </div>
          <img src="tom-cruz.jpg" class="absolute w-180 h-90 z-0" >

        </div>
        <div class="h-40 w-180 grid grid-rows-4 grid-cols-4 gap-16 mt-4 ">
          <app-button-reusable>Terror</app-button-reusable>
          <app-button-reusable>Comedia</app-button-reusable>
          <app-button-reusable>Suspenso</app-button-reusable>
          <app-button-reusable>Drama</app-button-reusable>
          <app-button-reusable>Amor</app-button-reusable>
          <app-button-reusable>Ficcion</app-button-reusable>
          <app-button-reusable>Animada</app-button-reusable>
        </div>
      </section>
  `,
})

export class SectionComponent{}
