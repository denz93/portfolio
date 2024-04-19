import Hero from "../landing-page-sections/hero";
import Link from "next/link";
import { getPosts } from "./get-posts-data";
import { formatRelative } from "date-fns";
import Navbar from "../navbar";
export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className="">
      <Hero scrollLink="/blog/#blog-section" />
      <Navbar />
      <section
        id="blog-section"
        className="px-4 md:px-8 lg:px-16 pt-16 min-h-[calc(100svh-248px-4rem)]"
      >
        <h1 className="text-center mb-16">Welcome to Nhan Bach&apos;s Blog</h1>
        <ul className="flex flex-col gap-4 text-xl mx-auto lg:w-3/4">
          {posts.map((post) => (
            <li key={post.slug} className="flex gap-4 items-center">
              <Link className="link ml-auto" href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
              <div className="opacity-50 mr-auto text-sm italic">
                {formatRelative(post.created, new Date())}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
