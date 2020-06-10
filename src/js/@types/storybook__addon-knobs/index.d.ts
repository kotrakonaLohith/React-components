import '@storybook/addon-knobs'

declare module '@storybook/addon-knobs' {
  export type RadiosValue = string | number;
  export function radios<T extends string>(name: string, options: { [s: string]: string }, value: T, groupId?: string): T;
  export function radios<T extends number>(name: string, options: { [s: number]: string }, value: T, groupId?: string): T;
  export function radios<T extends RadiosValue>(name: string, options: ReadonlyArray<T>, value: T, groupId?: string): T;
}
