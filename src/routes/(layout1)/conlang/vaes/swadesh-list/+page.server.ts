import { type SwadeshList } from '$lib/types/decl';
import { readFile } from 'node:fs/promises';
import Papa from 'papaparse';
import * as z from 'zod';

export const prerender = true;

const listSchema = z.string().array().array();
const path = 'src/routes/(layout1)/conlang/vaes/swadesh-list/swadesh.csv';

export const load = async (): Promise<SwadeshList> => {
  const csv = await readFile(path, { encoding: 'utf-8' });
  const parsed = Papa.parse(csv).data;
  const value = listSchema.parse(parsed).map((r) => r.map((s) => s.replaceAll(';', ',').trim()));

  return {
    value,
  };
};
