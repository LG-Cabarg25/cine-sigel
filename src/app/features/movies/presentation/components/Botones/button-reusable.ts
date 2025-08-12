import { Component } from "@angular/core";

@Component({
  selector:'app-button-reusable ',
  standalone:true,
  template:`
    <div class="rounded-sm  grid place-content-center" >
      <button class="px-4 py-2 text-white border-[2px] rounded-lg   w-30 h-8 grid place-content-center bg-[#FFC24E99]"
        style="border-image: linear-gradient(to right, red, yellow ) 1;">
        <ng-content></ng-content>
      </button>
    </div>
  `,
})

export class ButtonReusable{}
