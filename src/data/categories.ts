import { CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  {
    id: 'lost-pets',
    label: 'Lost Pets',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 border-amber-200',
    icon: '🐾'
  },
  {
    id: 'events',
    label: 'Events',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 border-purple-200',
    icon: '🎉'
  },
  {
    id: 'power-outage',
    label: 'Power Issues',
    color: 'text-red-600',
    bgColor: 'bg-red-50 border-red-200',
    icon: '⚡'
  },
  {
    id: 'water-issues',
    label: 'Water Issues',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 border-blue-200',
    icon: '💧'
  },
  {
    id: 'safety',
    label: 'Safety',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 border-orange-200',
    icon: '🛡️'
  },
  {
    id: 'general',
    label: 'General',
    color: 'text-green-600',
    bgColor: 'bg-green-50 border-green-200',
    icon: '📋'
  }
];