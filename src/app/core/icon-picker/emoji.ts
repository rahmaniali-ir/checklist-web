import { IconName } from '../i-con/icons';

export interface Emoji {
  title: string;
  icon: IconName;
  tags: string[];
}

export const emojiPack: Emoji[] = [
  {
    title: 'Board',
    icon: 'board',
    tags: ['board'],
  },
  {
    title: 'Bag',
    icon: 'bag',
    tags: ['bag', 'work', 'school', 'briefcase', 'document', 'office'],
  },
  {
    title: 'Building',
    icon: 'building',
    tags: ['building', 'place', 'office', 'school', 'home', 'house', 'work'],
  },
  {
    title: 'Home',
    icon: 'home',
    tags: ['home', 'house', 'family'],
  },
  {
    title: 'Cloud',
    icon: 'cloud',
    tags: ['cloud', 'sky'],
  },
  {
    title: 'Sun',
    icon: 'sun',
    tags: ['sun', 'day'],
  },
  {
    title: 'Sunset',
    icon: 'sunset',
    tags: ['sunset'],
  },
  {
    title: 'Moon',
    icon: 'moon',
    tags: ['moon', 'night'],
  },
  {
    title: 'Trees',
    icon: 'trees',
    tags: ['tree', 'woods', 'jungle', 'leaf', 'leaves', 'plant'],
  },
  {
    title: 'Image',
    icon: 'image',
    tags: ['image', 'picture'],
  },
  {
    title: 'Smile',
    icon: 'smile',
    tags: ['smile', 'emoji', 'happy'],
  },
  {
    title: 'Heart',
    icon: 'heart',
    tags: ['heart', 'love'],
  },
  {
    title: 'Paint',
    icon: 'paint',
    tags: ['paint', 'drawing', 'brush'],
  },
];
