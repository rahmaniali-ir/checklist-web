export const icons = {
  board: `<svg viewBox="0 0 24 24"><path d="M17 4h-1a2 2 0 00-2-2h-4a2 2 0 00-2 2H7a3 3 0 00-3 3v12a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-7 0h4v2h-4V4zm8 15a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h1a2 2 0 002 2h4a2 2 0 002-2h1a1 1 0 011 1v12z" /></svg>`,
  logOut: `<svg viewBox="0 0 24 24"><path d="M16 17l5-5-5-5M21 12H9M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus: `<svg viewBox="0 0 24 24"><path d="M19 11h-6V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" /></svg>`,
};

export type IconName = keyof typeof icons;
