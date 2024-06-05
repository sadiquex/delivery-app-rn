// sanity client to query content from our studio
// (link) to backend
// https://www.sanity.io/docs/js-client

import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "ahs0tog8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

// create/generate an image url
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
