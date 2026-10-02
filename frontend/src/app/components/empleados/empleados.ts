import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado';
import { Empleado } from '../../models/empleado';

declare var M: any;

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css'
})
export class EmpleadosComponent implements OnInit {

  constructor(
    public empleadoService: EmpleadoService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this.empleadoService.getEmpleados().subscribe({
      next: (res) => {
        this.empleadoService.empleados = res as Empleado[];
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error al cargar:', err)
    });
  }

  guardarEmpleado(form: NgForm) {
    const empleado = this.empleadoService.selectedEmpleado;

    if (empleado._id) {
      this.empleadoService.putEmpleado(empleado).subscribe({
        next: () => {
          this.resetForm(form);
          this.getEmpleados();
          this.toast('Actualizado satisfactoriamente');
        },
        error: (err) => {
          console.error('Error al actualizar:', err);
          this.toast('Error al actualizar');
        }
      });
    } else {
      this.empleadoService.postEmpleado(form.value).subscribe({
        next: () => {
          this.resetForm(form);
          this.getEmpleados();
          this.toast('Guardado satisfactoriamente');
        },
        error: (err) => {
          console.error('Error al guardar:', err);
          this.toast('Error al guardar');
        }
      });
    }
  }

  editarEmpleado(empleado: Empleado) {
    this.empleadoService.selectedEmpleado = { ...empleado };
  }

  eliminarEmpleado(_id: string) {
    if (!confirm('¿Seguro que quieres eliminarlo?')) return;

    this.empleadoService.deleteEmpleado(_id).subscribe({
      next: () => {
        this.getEmpleados();
        this.toast('Eliminado satisfactoriamente');
      },
      error: (err) => {
        console.error('Error al eliminar:', err);
        this.toast('Error al eliminar');
      }
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.empleadoService.selectedEmpleado = new Empleado();
    this.cdr.detectChanges();
  }

  private toast(mensaje: string) {
    if (typeof M !== 'undefined') {
      M.toast({ html: mensaje });
    }
  }
}