import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";
import { POST_QUERY } from "@/sanity/lib/queries";


export default async function Page({ params, }: { params: Promise<{ slug: string }>; }) {
    const { data: post } = await sanityFetch( { query: POST_QUERY, params: await params, } );
    if (!post) {
        notFound();
    }

    return (
        <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
            <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
            <hr />
            <Link className="hover:text-red-500 font-bold" href="/posts">&larr; Return to Posts</Link>
        </main>
    );
}
