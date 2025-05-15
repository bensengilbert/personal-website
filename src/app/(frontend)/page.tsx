import Link from "next/link";


export default async function Page() {
  console.log("456")
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Home</h1>
      <hr />
      <Link href="/posts" className="hover:text-green-500 font-bold">Post index &rarr;</Link>
    </section>
  );
}