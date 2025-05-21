// server/api/breed-image.ts
import { defineEventHandler, getQuery } from "h3";
export default defineEventHandler(async (event) => {
  const { name } = getQuery(event);
  if (!name) return { image: null };

  const res = await fetch(`https://dog.ceo/api/breed/${name}/images/random`);
  const data = await res.json();

  return { image: data.message };
});
