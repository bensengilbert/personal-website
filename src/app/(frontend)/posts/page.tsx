import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
    const { data:posts } = await sanityFetch({ query: POSTS_QUERY });
    console.log("123")
    return (
        <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
            <h1 className="text-4xl font-bold">Post Index</h1>
            <hr />
            <ul className="grid grid-cols-1 divide-y divide-blue-100">
                { posts.map((post) => (
                    <li key={ post._id }>
                        <Link className="block p-4 hover:text-green-500"
                            href={`/posts/${ post?.slug?.current }`}>
                                { post?.title }
                        </Link>
                    </li>
                ))}
            </ul>
            <hr />
            <Link className="hover:text-red-500 font-bold" href={'/'}>&larr; Back to Home</Link>
        </main>
    );
}