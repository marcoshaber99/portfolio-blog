import { getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { globalComponents } from "@/components/mdx";

// ... (keep existing metadata generation code)

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);
  if (!post) {
    notFound();
  }
  return (
    <section id="blog">
      {/* ... (keep existing schema script) */}
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
      </div>
      <article className="prose dark:prose-invert">
        <MDXRemote
          source={post.source}
          components={globalComponents}
          options={{
            parseFrontmatter: false,
            mdxOptions: {
              remarkPlugins: [],
              rehypePlugins: [],
            },
          }}
        />
      </article>
    </section>
  );
}
