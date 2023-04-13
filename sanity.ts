import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SANITY_KEY } from "./config";

const client = createClient({
  projectId: SANITY_KEY,
  dataset: "production",
  useCdn: true,
  apiVersion: "v2021-10-21",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);

export default client;
