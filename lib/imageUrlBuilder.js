import imageUrlBuilder from '@sanity/image-url';
import SanityClient from '@sanity/client';

const client = SanityClient({
  projectId: '7y4w3n75',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
