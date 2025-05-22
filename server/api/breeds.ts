// server/api/breeds.ts
import { defineEventHandler, createError } from "h3";

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  const apiKey = config.DOG_API_KEY;

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "DOG_API_KEY is not defined in the environment variables.",
    });
  }

  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key": apiKey,
      },
    });

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: `Dog API responded with ${response.statusText}`,
      });
    }

    const breeds = await response.json();

    return breeds.map((breed: any) => ({
      id: breed.id,
      name: breed.name,
      image: breed.image?.url || null,
    }));
  } catch (error: any) {
    console.error("Error fetching breeds:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error fetching dog breeds.",
    });
  }
});
