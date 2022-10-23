export interface SipPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
