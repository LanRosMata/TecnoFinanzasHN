import { getCollection } from "astro:content";
export async function getAllTagsInfo() {
  const posts = await getCollection("info");
  return Array.from(
    new Set(
      posts
        .map((post) => post.data.tags)
        .flat()
        .sort()
    )
  );
}

export async function getAllTagsBlog() {
  const posts = await getCollection("blog");
  return Array.from(
    new Set(
      posts
        .map((post) => post.data.tags)
        .flat()
        .sort()
    )
  );
}

export async function getAllTagsCombined() {
  const infoCollection = await getCollection("info");
  const blogCollection = await getCollection("blog");
  
  const combinedCollection = [...infoCollection, ...blogCollection];
  
  return Array.from(
    new Set(
      combinedCollection
        .map((post) => post.data.tags)
        .flat()
        .filter(Boolean) 
        .sort()
    )
  );
}
