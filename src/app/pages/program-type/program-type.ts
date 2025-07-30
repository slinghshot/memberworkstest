import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-program-type',
  imports: [LucideAngularModule],
  templateUrl: './program-type.html',
  styleUrl: './program-type.css',
})
export class ProgramType {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() activities: { name: string; icon: string }[] = [];
}
