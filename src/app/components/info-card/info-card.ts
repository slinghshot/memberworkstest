import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-info-card',
  standalone: true, // Make sure your component is standalone
  imports: [LucideAngularModule],
  templateUrl: './info-card.html',
  styleUrl: './info-card.css',
})
export class InfoCard {
  @Input() count: number = 0;
  @Input() description: string = '';
  @Input() icon: string = '';
  @Input() iconColor: string = 'currentColor';
}
