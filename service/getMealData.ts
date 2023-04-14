import sanityClient from "../sanity";
import tgSender from "../utils/tgSender";
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
    tgSender.sendMessage(`ERROR while getting meal data \n ${e as string}`);
    return new Error(e as string);
  }
};
