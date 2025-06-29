export interface Post {
  id: string;
  title: string;
  content: string;
  category: PostCategory;
  author: string;
  contact: string;
  date: Date;
  urgent?: boolean;
}

export type PostCategory = 
  | 'lost-pets'
  | 'events' 
  | 'power-outage'
  | 'water-issues'
  | 'safety'
  | 'general';

export interface CategoryInfo {
  id: PostCategory;
  label: string;
  color: string;
  bgColor: string;
  icon: string;
}