import sanityClient from "../sanity";
import { TYPE_OF_MEAL } from "../components/Home/useHome.control";
import { IFilter } from "../components/Home/FIlters/useFilters.control";

export interface IMealFromSanity {
  readonly _id: string;
  readonly price: number;
  readonly name: string;
  readonly _ref: string;
  readonly image: any; // -  sanity graphQl object
  readonly imageUrl: string;
  readonly description?: string;
  readonly _type: string;
  readonly category: TYPE_OF_MEAL;
  readonly additional?: {
    readonly additionalNameOption: string;
    readonly additionalPriceOption: number;
    readonly _key: string;
  }[];
}
export const getMeals = async (
  filter: IFilter
): Promise<IMealFromSanity[] | Error> => {
  const filterQuery = `
    *[_type=="meals" && references("${filter.id}")]{
      ...,
      "imageUrl": image.asset->url,
      "category": category->categoryName
    }[]
  `;

  const commonQuery = `
  *[_type=="meals"]{
    ...,
    "imageUrl": image.asset->url,
    "category": category->categoryName
  }[]
  `;

  const query = filter.name === TYPE_OF_MEAL.ALL ? commonQuery : filterQuery;

  try {
    const d = await sanityClient.fetch(query);
    return d;
  } catch (e) {
    console.log(e);
    return new Error(e as string);
  }
};
