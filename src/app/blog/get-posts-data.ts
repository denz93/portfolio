import path from "node:path";
import fs from "node:fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import slugify from "slugify";

const postDirectory = path.resolve(process.cwd(), "src/app/blog/posts");
export async function getPosts() {
  return fs
    .readdirSync(postDirectory, {
      encoding: "utf-8",
    })
    .map((fileName) => {
      const { data, content } = matter(
        fs.readFileSync(path.join(postDirectory, fileName), "utf-8"),
      );
      return {
        markdown: content,
        ...(data as { title: string; created: Date }),
      };
    })
    .filter((p) => p.title && p.created)
    .map((p) => {
      return {
        ...p,
        slug: slugify(p.title, { lower: true, trim: true }),
      };
    });
}

export async function getPostBySlug(slug: string) {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug);
}
