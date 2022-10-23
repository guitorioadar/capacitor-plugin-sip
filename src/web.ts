import { WebPlugin } from '@capacitor/core';

import type { SipPlugin } from './definitions';

export class SipWeb extends WebPlugin implements SipPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
