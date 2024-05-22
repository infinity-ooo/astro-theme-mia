import { getCollection } from "astro:content";

export const posts = (await getCollection("blog")).sort((a, b) =>
  new Date(a.data.date).valueOf() > new Date(b.data.date).valueOf() ? -1 : 1,
);

export const tags = Array.from(
  new Set(
    posts
      .map((post) => {
        if (post.data.tags && post.data.tags.length) {
          return post.data.tags;
        }
        return [];
      })
      .flat(),
  ),
).sort();

export const years = Array.from(new Set(posts.map((post) => new Date(post.data.date).getFullYear().toString()))).sort();
