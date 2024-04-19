import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "../get-posts-data";
import { MDXRemote } from "next-mdx-remote/rsc";
import Hero from "@/app/landing-page-sections/hero";
import Breadcrums from "@/app/breadcrums";
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}
export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }
  return (
    <div>
      <Hero scrollLink="#post-detail" />
      <Breadcrums />
      <section
        id="post-detail"
        className="px-4 pt-16 prose lg:prose-lg mx-auto"
      >
        <MDXRemote source={post.markdown}></MDXRemote>
      </section>
    </div>
  );
}
