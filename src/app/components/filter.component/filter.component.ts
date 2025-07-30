import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input() programTypes: string[] = [];
  @Input() sports: string[] = [];
  @Input() statuses: string[] = [];

  searchQuery: string = '';
  selectedProgramType: string = '';
  selectedSport: string = '';
  selectedStatus: string = '';
  recentlyCreated: boolean = false;
  highRegistration: boolean = false;
  endingSoon: boolean = false;

  @Output() filterChange = new EventEmitter<{
    searchQuery: string;
    programType: string;
    sport: string;
    status: string;
    recentlyCreated: boolean;
    highRegistration: boolean;
    endingSoon: boolean;
  }>();

  filterPrograms() {
    this.filterChange.emit({
      searchQuery: this.searchQuery,
      programType: this.selectedProgramType,
      sport: this.selectedSport,
      status: this.selectedStatus,
      recentlyCreated: this.recentlyCreated,
      highRegistration: this.highRegistration,
      endingSoon: this.endingSoon,
    });
  }
}
