import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InfoCard } from '../../components/info-card/info-card';
import { ProgramService } from '../../services/program.service';
import { Cards } from '../../components/cards/cards';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from '../../components/filter.component/filter.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-program-management',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    RouterModule,

    Cards,
    InfoCard,
    FilterComponent,
  ],
  templateUrl: './program-management.html',
  styleUrl: './program-management.css',
})
export class ProgramManagement implements OnInit {
  programMetrics: metrics[] = [];
  programs: programs[] = [];
  filteredPrograms: programs[] = [];

  searchQuery: string = '';
  selectedProgramType: string = '';
  selectedSport: string = '';
  selectedStatus: string = '';

  programTypes: string[] = [];
  sports: string[] = [];
  statuses: string[] = [];

  showActive: boolean = false;
  recentlyCreated: boolean = false;
  highRegistration: boolean = false;
  endingSoon: boolean = false;
  tags: string[] = new Array<string>();

  constructor(private programService: ProgramService) {}

  ngOnInit() {
    this.programMetrics = this.programService.getMetrics();
    this.programs = this.programService.getPrograms();
    this.filteredPrograms = this.programs;

    this.extractUniqueFilterValues();
  }

  // These are the values extracted and used by filter component
  extractUniqueFilterValues() {
    this.programTypes = [
      ...new Set(
        this.programs
          .map((p) => p.programType)
          .filter((type) => type && type.trim() !== '')
      ),
    ];
    this.sports = [
      ...new Set(
        this.programs
          .map((p) => p.sport)
          .filter((type) => type && type.trim() !== '')
      ),
    ];
    this.statuses = [
      ...new Set(
        this.programs
          .map((p) => p.status)
          .filter((type) => type && type.trim() !== '')
      ),
    ];
  }

  onFilterChange(filterData: {
    searchQuery: string;
    programType: string;
    sport: string;
    status: string;
    recentlyCreated: boolean;
    highRegistration: boolean;
    endingSoon: boolean;
  }) {
    this.searchQuery = filterData.searchQuery;
    this.selectedProgramType = filterData.programType;
    this.selectedSport = filterData.sport;
    this.selectedStatus = filterData.status;
    this.recentlyCreated = filterData.recentlyCreated;
    this.highRegistration = filterData.highRegistration;
    this.endingSoon = filterData.endingSoon;

    this.filterPrograms();
  }

  filterPrograms() {
    const today = new Date();

    this.filteredPrograms = this.programs.filter((program) => {
      const searchMatch =
        !this.searchQuery ||
        program.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        program.sport.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        program.programType
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());

      const typeMatch =
        !this.selectedProgramType ||
        program.programType === this.selectedProgramType;

      const sportMatch =
        !this.selectedSport || program.sport === this.selectedSport;

      const activeMatch = !this.showActive || program.status === 'active';

      const statusMatch =
        !this.selectedStatus || program.status === this.selectedStatus;

      const startDate = new Date(program.startDate);
      const daysSinceCreation = Math.floor(
        (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      const recentlyCreatedMatch =
        !this.recentlyCreated ||
        (daysSinceCreation >= 0 && daysSinceCreation <= 15);

      const highRegistrationMatch =
        !this.highRegistration || program.registeredUsers > 30;

      const endDate = new Date(program.endDate);
      const daysUntilEnd = Math.floor(
        (endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      );
      const endingSoonMatch =
        !this.endingSoon || (daysUntilEnd >= 0 && daysUntilEnd <= 15);

      return (
        searchMatch &&
        typeMatch &&
        sportMatch &&
        activeMatch &&
        recentlyCreatedMatch &&
        highRegistrationMatch &&
        endingSoonMatch &&
        statusMatch
      );
    });
  }
}
