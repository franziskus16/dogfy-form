// server/api/breeds.ts
import { defineEventHandler } from "h3";

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  const response = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key": config.DOG_API_KEY,
    },
  });

  const breeds = await response.json();
  return breeds.map((breed: any) => ({
    id: breed.id,
    name: breed.name,
    image: breed.image?.url || null,
  }));
});
