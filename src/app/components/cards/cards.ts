import { Component, HostListener, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-cards',
  imports: [DatePipe, MatIcon, CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
  @Input() imageUrl: string = '';
  @Input() status: string = '';
  @Input() title: string = '';
  @Input() programType: string = '';
  @Input() sport: string = '';
  @Input() startDate: Date = new Date();
  @Input() endDate: Date = new Date();
  @Input() registeredUsers: number = 0;
  @Input() showButton: boolean = true;
  @Input() tags: string[] = [];

  menuOpen: boolean = false;

  get displayImageUrl(): string {
    return this.imageUrl && this.imageUrl.trim() !== ''
      ? this.imageUrl
      : 'https://media.discordapp.net/attachments/722593297415274536/1399588233565962360/placeholder.png?ex=68898b9d&is=68883a1d&hm=8df4835e72db6c1f8afd7b5d2a3fc93ae1353f1380e27b681181ed5ff51547ba&=&format=webp&quality=lossless&width=825&height=550';
  }

  toggleMenu(event: Event): void {
    this.menuOpen = !this.menuOpen;
    event.stopPropagation();
  }

  @HostListener('document:click')
  clickOutside() {
    if (this.menuOpen) {
      this.menuOpen = false;
    }
  }

  getActiveClass(): string {
    switch (this.status.toLowerCase()) {
      case 'active':
        return 'active-status';
      case 'archived':
        return 'archived-status';
      default:
        return '';
    }
  }
}
