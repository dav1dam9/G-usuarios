import { Component } from '@angular/core';
import { EmpleadosComponent } from './components/empleados/empleados';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmpleadosComponent],
  template: `<app-empleados></app-empleados>`
})
export class App {}