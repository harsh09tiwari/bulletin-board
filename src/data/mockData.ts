import { Post } from '../types';

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Lost Cat - Whiskers',
    content: 'Orange tabby cat, very friendly. Missing since Tuesday evening near Oak Street. Please call if you see him!',
    category: 'lost-pets',
    author: 'Sarah Johnson',
    contact: '(555) 123-4567',
    date: new Date('2025-01-08'),
    urgent: true
  },
  {
    id: '2',
    title: 'Neighborhood BBQ This Saturday',
    content: 'Join us for our monthly community BBQ at Riverside Park! Bring a side dish to share. Grills and drinks provided.',
    category: 'events',
    author: 'Mike Chen',
    contact: 'mike.chen@email.com',
    date: new Date('2025-01-07')
  },
  {
    id: '3',
    title: 'Power Outage - Elm Street Area',
    content: 'Planned maintenance will cause power outage on Elm Street from 9 AM to 2 PM this Thursday. Please plan accordingly.',
    category: 'power-outage',
    author: 'City Utilities',
    contact: '(555) 311-0000',
    date: new Date('2025-01-06'),
    urgent: true
  },
  {
    id: '4',
    title: 'Water Main Repair Notice',
    content: 'Water service may be interrupted on Pine Avenue between 8 AM - 4 PM tomorrow for emergency repairs.',
    category: 'water-issues',
    author: 'Public Works Dept',
    contact: '(555) 311-1234',
    date: new Date('2025-01-08'),
    urgent: true
  },
  {
    id: '5',
    title: 'Yoga Classes Starting Soon',
    content: 'New outdoor yoga classes starting next week at the community center. Beginner-friendly, all ages welcome!',
    category: 'events',
    author: 'Lisa Martinez',
    contact: 'lisa.yoga@email.com',
    date: new Date('2025-01-05')
  },
  {
    id: '6',
    title: 'Suspicious Activity Alert',
    content: 'Please be aware of reports of package theft in the area. Consider having packages delivered to your workplace if possible.',
    category: 'safety',
    author: 'Neighborhood Watch',
    contact: 'watch@ourneighborhood.org',
    date: new Date('2025-01-07'),
    urgent: true
  },
  {
    id: '7',
    title: 'Looking for Dog Walker',
    content: 'Need someone reliable to walk my golden retriever twice a week. Flexible schedule, good pay. Dog-lover preferred!',
    category: 'general',
    author: 'Robert Davis',
    contact: '(555) 987-6543',
    date: new Date('2025-01-04')
  },
  {
    id: '8',
    title: 'Found Keys - Near Bus Stop',
    content: 'Found a set of house keys with a blue keychain near the 5th Street bus stop. Contact me to identify and claim.',
    category: 'general',
    author: 'Anonymous Good Samaritan',
    contact: '(555) 456-7890',
    date: new Date('2025-01-08')
  }
];