import { registerPlugin } from '@capacitor/core';

import type { SipPlugin } from './definitions';

const Sip = registerPlugin<SipPlugin>('Sip', {
  web: () => import('./web').then(m => new m.SipWeb()),
});

export * from './definitions';
export { Sip };
