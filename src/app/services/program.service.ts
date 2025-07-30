import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  constructor() {}

  getMetrics() {
    return [
      {
        count: 5,
        description: 'Total Programs',
        icon: 'trophy',
        iconColor: '#5995ab',
      },
      {
        count: 4,
        description: 'Active Programs',
        icon: 'calendar',
        iconColor: '#3daa40',
      },
      {
        count: 3,
        description: 'Total Registrants',
        icon: 'users',
        iconColor: '#7b3270',
      },
      {
        count: 1,
        description: 'Archived Programs',
        icon: 'archive',
        iconColor: '#4f515e',
      },
      {
        count: 0,
        description: 'Draft Programs',
        icon: 'settings',
        iconColor: '#bc923e',
      },
      {
        count: 48,
        description: 'avg. Registrants',
        icon: 'target',
        iconColor: '#af4b98',
      },
    ];
  }
  getPrograms() {
    return [
      {
        title: 'Youth Basketball League',
        programType: 'Competition Sports',
        sport: 'basketball',
        image:
          'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        startDate: new Date('2023-10-01'),
        endDate: new Date('2023-12-31'),
        registeredUsers: 24,
        status: 'active',
        tags: ['Popular', 'New'],
      },
      {
        title: 'Adult Fitness Bootcamp',
        programType: 'Class',
        sport: 'Fitness',
        image:
          'https://media.discordapp.net/attachments/722593297415274536/1399588232454471781/exercise.png?ex=68898b9d&is=68883a1d&hm=8ceaf61d6f376bc260b3e4a0cae5754670e0440481128df6bac7b3d411dfafd0&=&format=webp&quality=lossless&width=550&height=367',
        startDate: new Date('2023-11-01'),
        endDate: new Date('2024-01-31'),
        registeredUsers: 30,
        status: 'active',
        tags: ['High Intensity'],
      },
      {
        title: 'Summer Adventure Camp',
        programType: 'Camp',
        sport: 'Day Camp',
        image: '',
        startDate: new Date('2025-07-20'),
        endDate: new Date('2025-11-30'),
        registeredUsers: 18,
        status: 'active',
        tags: ['Summer', 'Outdoor'],
      },
      {
        title: 'Community Fundraiser Gala',
        programType: 'One-Time Event',
        sport: '',
        image:
          'https://media.discordapp.net/attachments/722593297415274536/1399588233024766023/flowers.png?ex=68898b9d&is=68883a1d&hm=e4275a0e7508214aadf86e6bc1b1220967f28b2f83d23fc44504884e1f00374b&=&format=webp&quality=lossless&width=1711&height=642',
        startDate: new Date('2023-12-01'),
        endDate: new Date('2025-07-26'),
        registeredUsers: 120,
        status: 'active',
        tags: ['Fundraiser', 'Community'],
      },
      {
        title: 'Archived Soccer Program',
        programType: 'Competition Sports',
        sport: 'soccer',
        image:
          'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        startDate: new Date('2023-12-15'),
        endDate: new Date('2024-02-15'),
        registeredUsers: 20,
        status: 'Archived',
        tags: [],
      },
    ];
  }

  getProgramTypes() {
    return [
      {
        name: 'Sports & Recreation',
        description: 'Athletic programs and recreational activities',
        icon: 'zap',
        activities: [
          { name: 'Team Sports', icon: 'zap' },
          { name: 'Competitions & Meets', icon: 'trophy' },
          { name: 'Esports', icon: 'gamepad-2' },
        ],
      },
      {
        name: 'Youth Development',
        description: 'Programs focused on youth growth and leadership',
        icon: 'star',
        activities: [
          { name: 'Teen Leadership & something else', icon: 'star' },
          { name: 'After School Enrichment', icon: 'graduation-cap' },
        ],
      },
      {
        name: 'Health & Wellness',
        description: 'Fitness, wellness, and health education programs',
        icon: 'activity',
        activities: [
          { name: 'Classes', icon: 'book-open' },
          { name: 'Health & Wellness', icon: 'activity' },
          { name: 'Inclusive/Adaptive Programs', icon: 'accessibility' },
        ],
      },
      {
        name: 'Family & Community',
        description: 'Special events and fundraisers',
        icon: 'users',
        activities: [
          { name: 'Events', icon: 'calendar' },
          { name: 'Volunteer Opportunities', icon: 'heart' },
          { name: 'Family Activities', icon: 'users' },
        ],
      },
    ];
  }
}
