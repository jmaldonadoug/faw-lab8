import { Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { TablaComponent } from './pages/tabla/tabla.component';

export const routes: Routes = [
    { path: '', redirectTo: 'formulario', pathMatch: 'full' },
    { path: 'formulario', component: FormularioComponent },
    { path: 'tabla', component: TablaComponent }
];
