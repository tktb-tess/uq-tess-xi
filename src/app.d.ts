// See https://svelte.dev/docs/kit/types#app.d.ts

import type { Primitive } from 'type-fest';

interface RecursiveRecord {
  [k: string]: Primitive | RecursiveRecord | RecursiveArray;
}

type RecursiveArray = Array<Primitive | RecursiveRecord | RecursiveArray>;

// for information about these interfaces
declare global {
  namespace App {
    interface Error {
      readonly name: string;
      readonly stack?: string;
      readonly cause?: Primitive | RecursiveRecord | RecursiveArray;
    }
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
