import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnChanges {

  @Output() toggleSidebar = new EventEmitter<void>(); // Evento para abrir el sidebar
  @Input() isSidebarOpen: boolean = false; // Estado del sidebar

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isSidebarOpen']) {
      console.log('isSidebarOpen changed:', changes['isSidebarOpen'].currentValue);
    }
  }

  toggleSidenav() {
    this.toggleSidebar.emit(); // Emitir evento al layout para abrir el sidebar
  }
}