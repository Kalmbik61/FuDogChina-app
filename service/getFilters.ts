import { IFilter } from "../components/Home/FIlters/useFilters.control";
import sanityClient from "../sanity";

export const getFilters = async (): Promise<IFilter[] | Error> => {
  const query = `
  *[_type=="menuCategory"]{
    "name":categoryName,
    "id": _id
    }[]
  `;

  try {
    const d = await sanityClient.fetch(query);
    return d;
  } catch (e) {
    console.log(e);
    return new Error(e as string);
  }
};
