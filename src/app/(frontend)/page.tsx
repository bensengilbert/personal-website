import { Title } from "@/components/Title";
import { sanityFetch } from "@/sanity/lib/live";
import { LANDING_PAGE_QUERY } from "@/sanity/lib/queries";
import { components } from "@/sanity/PortableTextComponents";
import { PortableText, PortableTextBlock } from "next-sanity";

export default async function Page() {
  const { data: landingPageData } = await sanityFetch({
    query: LANDING_PAGE_QUERY,
  });

  console.log(
    "added this log just for testing purpose, will remove this in next release!",
  );

  return (
    <section className="flex min-h-screen items-center justify-center font-apple">
      <div className="max-w-2xl space-y-6 text-center px-4">
        <Title>
          {landingPageData?.greetings} {landingPageData?.title}
        </Title>
        <PortableText
          value={landingPageData?.summary as PortableTextBlock[]}
          components={components}
        />
      </div>
    </section>
  );
}
