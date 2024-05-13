import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug) {
  const accessToken = personalData.mediumAccessToken;

  const res = await fetch(`https://api.medium.com/v1/users/Sricharan2k3/latest`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const blog = data.data.posts.find((post) => post.uniqueSlug === slug);

  if (!blog) {
    throw new Error("Blog post not found");
  }

  return blog;
}