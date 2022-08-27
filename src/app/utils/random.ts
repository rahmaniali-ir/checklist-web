export function random(min: number = 0, max: number = 1) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function randomFromArray<T>(array: T[]) {
  return array[random(0, array.length)];
}

export function randomFromString(str: string = '') {
  if (!str.length) return '';

  return str.split('')[random(0, str.length)];
}

export function randomString(feed: string = '', length: number = 1) {
  if (!feed || !length) return '';

  let result = '';

  for (let i = 0; i < length; i++) result += randomFromString(feed);

  return result;
}

const hexColorFeed = '0123456789ABCDEF';
export function randomHexColor() {
  return '#' + randomString(hexColorFeed, 6);
}
