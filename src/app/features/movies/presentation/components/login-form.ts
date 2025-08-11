import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-login-form',
  standalone: true,
  template: `

<form
  (submit)="onSubmit($event)"
  class="w-full max-w-md mx-auto flex flex-col gap-10 text-white"
>
  <!-- Título -->
  <h2 class="text-5xl font-extrabold text-[#EE7D25] tracking-tight pb-2 border-b-4 border-[#EE7D25]">
    Inicio de Sesión
  </h2>

  <!-- Usuario -->
  <div>
    <input
      type="text"
      class="w-full bg-transparent px-0 py-3
             border-0 border-b border-[#FFC24E]/60
             focus:outline-none focus:ring-0 focus:border-[#FFC24E]
             placeholder:text-[#FFC24E]/80 text-white"
      placeholder="Nombre de Usuario *"
      [value]="username()"
      (input)="username.set($any($event.target).value)"
      required
      autocomplete="username"
      [disabled]="isLoading"
    />
  </div>

  <!-- Contraseña -->
  <div>
    <input
      type="password"
      class="w-full bg-transparent px-0 py-3
             border-0 border-b border-[#FFC24E]/60
             focus:outline-none focus:ring-0 focus:border-[#FFC24E]
             placeholder:text-[#FFC24E]/80 text-white"
      placeholder="Contraseña *"
      [value]="password()"
      (input)="password.set($any($event.target).value)"
      required
      autocomplete="current-password"
      [disabled]="isLoading"
    />
  </div>

  <!-- Botón -->
  <button
    type="submit"
    class="mx-auto w-44 py-2 text-lg font-semibold
           bg-[#FFC24E]/90 hover:bg-[#EE7D25]
           text-white rounded-lg
           border-2 border-amber-300 shadow
           transition disabled:opacity-60"
    [disabled]="isLoading"
  >
    {{ isLoading ? 'Cargando...' : 'Ingresar' }}
  </button>

  <!-- Link -->
  <p class="text-center">
    <a class="underline text-[#EE7D25]/90 hover:text-[#EE7D25]" href="#">
      ¿Tienes una cuenta?
    </a>
  </p>

  <!-- Error -->
  @if (error()) {
    <div class="bg-red-50/10 border border-red-300/40 text-red-200 rounded p-2 text-center text-sm">
      {{ error() }}
    </div>
  }
</form>


  `,
})
export class LoginForm {
  username = signal('');
  password = signal('');
  error = signal('');

  @Input() isLoading = false;
  @Output() login = new EventEmitter<{ username: string; password: string }>();

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.username().trim() || !this.password().trim()) {
      this.error.set('Usuario y contraseña requeridos');
      return;
    }
    this.error.set('');
    this.login.emit({
      username: this.username().trim(),
      password: this.password().trim(),
    });
  }
}
