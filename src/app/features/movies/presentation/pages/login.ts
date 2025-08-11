import { Component, signal } from '@angular/core';
import { LoginForm } from "../components/login-form";


@Component({
  selector: 'app-login',
  imports: [LoginForm],
  template: `
 <div
      class="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#915151] to-[#36316F] relative"
    >
      <div
        class="rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-w-5xl w-4/5"
      >
       <div class="flex-1 flex items-center justify-center p-12 bg-[#BB7D6A]">
          <img
            src="/img/login-img.svg"
            alt="Farmacia online"
            class="max-w-md w-[320px] md:w-[380px] drop-shadow-xl"
          />
        </div>
        <div class="flex-1 flex items-center justify-center p-12 ">
          <app-login-form/>


        </div>
      </div>
 </div>
  `,

})
export class LoginPage {

}
