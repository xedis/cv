

// Fetch skills from this JSON
export const prerender = true;

// src/routes/+page.ts
import type { PageLoad } from './$types';

const endpoint = 'https://gist.githubusercontent.com/xedis/a007df16240b63e201a55bace02e5139/raw/132e3244436b25ede10954db2d8d3d87b63e1cf0/cv-data.json';

export const load: PageLoad = async () => {
  const response = await fetch(endpoint);
  return await response.json();
};
