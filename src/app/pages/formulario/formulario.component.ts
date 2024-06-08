import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatButtonModule, MatCardModule, MatInputModule, MatRadioModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  dataService = inject(DataService);

  form = new FormGroup({
    nombre: new FormControl(''),
    raza: new FormControl('Perro')
  });

  insert() {
    const cond = confirm('¿Seguro desea agregar esta mascota?');
    if (cond) {
      this.dataService.insertMascota(this.form);
      this.form.reset({ raza: 'Perro' });
      alert('Mascota agregada');
    }
  }
}
