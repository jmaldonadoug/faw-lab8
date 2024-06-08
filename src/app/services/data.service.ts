import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Mascota[] = [];

  constructor() { }

  getData() {
    return this.data;
  }

  insertMascota(form: FormGroup) {
    const newData = this.data;
    newData.push({ nombre: form.value.nombre, raza: form.value.raza });

    this.data = newData;
  }
}

export class Mascota {
  nombre: string;
  raza: string;

  constructor(nombre: string, raza: string) {
    this.nombre = nombre;
    this.raza = raza;
  }
}