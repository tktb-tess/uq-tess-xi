// See https://svelte.dev/docs/kit/types#app.d.ts

import type { Primitive } from 'type-fest';

interface RecursiveRecord {
  [k: string]: Primitive | RecursiveRecord | (Primitive | RecursiveRecord)[];
}

// for information about these interfaces
declare global {
  namespace App {
    interface Error {
      readonly name: string;
      readonly stack?: string;
      readonly cause?: Primitive | RecursiveRecord | (Primitive | RecursiveRecord)[];
    }
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
