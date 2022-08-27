export const icons = {
  board: `<svg viewBox="0 0 24 24"><path d="M17 4h-1a2 2 0 00-2-2h-4a2 2 0 00-2 2H7a3 3 0 00-3 3v12a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-7 0h4v2h-4V4zm8 15a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h1a2 2 0 002 2h4a2 2 0 002-2h1a1 1 0 011 1v12z" /></svg>`,
  image: `<svg viewBox="0 0 24 24"><path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zM5 18a1 1 0 01-1-1v-2.42l3.3-3.29a1 1 0 011.4 0L15.41 18H5zm15-1a1 1 0 01-1 1h-.77l-3.81-3.83.88-.88a1 1 0 011.4 0l3.3 3.29V17zm0-3.24l-1.88-1.87a3.06 3.06 0 00-4.24 0l-.88.88-2.88-2.88a3.06 3.06 0 00-4.24 0L4 11.76V7a1 1 0 011-1h14a1 1 0 011 1v6.76z" /></svg>`,
  logOut: `<svg viewBox="0 0 24 24"><path d="M16 17l5-5-5-5M21 12H9M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  more: `<svg viewBox="0 0 24 24"><path d="M19 13a1 1 0 100-2 1 1 0 000 2zM12 13a1 1 0 100-2 1 1 0 000 2zM5 13a1 1 0 100-2 1 1 0 000 2z" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  paint: `<svg viewBox="0 0 24 24"><path d="M18 1h-8a3 3 0 00-3 3H6a3 3 0 00-3 3v3a3 3 0 003 3h6a1 1 0 011 1v1a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2v-4a2 2 0 00-2-2v-1a3 3 0 00-3-3H6a1 1 0 01-1-1V7a1 1 0 011-1h1a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3zm-3 16v4h-2v-4h2zm4-11a1 1 0 01-1 1h-8a1 1 0 01-1-1V4a1 1 0 011-1h8a1 1 0 011 1v2z" /></svg>`,
  plus: `<svg viewBox="0 0 24 24"><path d="M19 11h-6V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" /></svg>`,
  present: `<svg viewBox="0 0 24 24"><path d="M21 14h-1V3a1 1 0 00-1-1H5a1 1 0 00-1 1v11H3a1 1 0 000 2h8v1.15l-4.55 3A1 1 0 007 22a.94.94 0 00.55-.17L11 19.55V21a1 1 0 002 0v-1.45l3.45 2.28A.94.94 0 0017 22a1 1 0 00.55-1.83l-4.55-3V16h8a1 1 0 000-2zm-3 0H6V4h12v10zm-9-2a1 1 0 00.83-.45l1.33-2 1.13 1.14a1 1 0 00.81.29 1 1 0 00.73-.45l2-3a1 1 0 00-1.66-1.1l-1.33 2-1.13-1.14A1 1 0 0010.9 7a1 1 0 00-.73.45l-2 3a1 1 0 00.28 1.38A.94.94 0 009 12z" /></svg>`,
  smile: `<svg viewBox="0 0 24 24"><path d="M14.36 14.23a3.76 3.76 0 01-4.72 0 1.001 1.001 0 00-1.28 1.54 5.68 5.68 0 007.28 0 1.001 1.001 0 00-1.28-1.54zM9 11a1 1 0 100-2 1 1 0 000 2zm6-2a1 1 0 100 2 1 1 0 000-2zm-3-7a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z" /></svg>`,
};

export type IconName = keyof typeof icons;
