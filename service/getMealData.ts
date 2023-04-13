import sanityClient from "../sanity";
import { IMealFromSanity } from "./getMeals";

export const getMealData = async (
  id: string
): Promise<IMealFromSanity | Error> => {
  const query = `
  *[_id=="${id}"]{
    ...,
    "imageUrl": image.asset->url,
  }[0]
  `;

  try {
    const d = await sanityClient.fetch(query);
    return d;
  } catch (e) {
    console.log(e);
    return new Error(e as string);
  }
};
