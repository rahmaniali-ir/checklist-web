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
    title: 'Paint',
    icon: 'paint',
    tags: ['paint', 'drawing', 'brush'],
  },
];
