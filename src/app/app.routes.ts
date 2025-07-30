import { Routes } from '@angular/router';
import { ProgramManagement } from './pages/program-management/program-management';
import { CreateProgram } from './pages/create-program/create-program';

export const routes: Routes = [
  { path: 'program-management', component: ProgramManagement },
  { path: 'create-program', component: CreateProgram },
  { path: '', redirectTo: '/program-management', pathMatch: 'full' },
];
