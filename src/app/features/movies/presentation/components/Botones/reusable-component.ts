import { Component } from "@angular/core";

@Component({
  selector: 'app-reusable-component',
  standalone: true,
  template:`
    <div class="flex place-content-evenly w-80">
      <button class="text-white underline active:hover:decoration-yellow-500 hover:text-yellow-500">PROMOCIONES</button>
      <button class="text-white underline active:hover:decoration-yellow-500 hover:text-yellow-500">PELICULAS</button>
    </div>
  `,

})

export class ReusableComponent{

}
