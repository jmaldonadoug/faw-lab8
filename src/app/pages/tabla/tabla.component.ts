import { Component, OnInit, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DataService, Mascota } from '../../services/data.service';


@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit{
  dataService = inject(DataService);

  data: Mascota[] = [];
  displayedColumns: string[] = ['nombre', 'raza'];

  ngOnInit(): void {
    this.data = this.dataService.data;
  }
}
