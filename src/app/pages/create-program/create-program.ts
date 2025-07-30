import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program.service';
import { ProgramType } from '../program-type/program-type';

@Component({
  selector: 'app-create-program',
  imports: [ProgramType],
  templateUrl: './create-program.html',
  styleUrl: './create-program.css',
})
export class CreateProgram implements OnInit {
  menuOptions = [
    {
      number: 1,
      title: 'Program Type',
      description: 'Choose your program category and activities...',
    },
    {
      number: 2,
      title: 'Basic Information',
      description: 'Program details, description, and...',
    },
    {
      number: 3,
      title: 'Locations',
      description: 'Set program locations.',
    },
    {
      number: 4,
      title: 'Divisions',
      description: 'Configure program divisions.',
    },
    {
      number: 5,
      title: 'Pricing',
      description: 'Set fees and pricing.',
    },
    {
      number: 6,
      title: 'Registration',
      description: 'Configure registration settings.',
    },
    {
      number: 7,
      title: 'Staff',
      description: 'Assign staff and coaches.',
    },
    {
      number: 8,
      title: 'Volunteers',
      description: 'Set volunteer requirements.',
    },
    {
      number: 9,
      title: 'Forms',
      description: 'Post-registration requirements.',
    },
    {
      number: 10,
      title: 'Review',
      description: 'Review and finalize.',
    },
  ];
  selectedOption = 1; // default to program 1
  programTypes: ProgramTypes[] = [];

  constructor(private programService: ProgramService) {}

  ngOnInit() {
    this.programTypes = this.programService.getProgramTypes();
  }

  selectOption(optionNumber: number): void {
    this.selectedOption = optionNumber;
  }
}
