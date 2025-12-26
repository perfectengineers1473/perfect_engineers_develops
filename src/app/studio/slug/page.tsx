
import { notFound } from "next/navigation";


import ImageSection from "@/components/imageSection";
import { client } from "lib/client";
import ContactUsSection from "@/components/contactUsSection";
import HomeHeroSection from "@/components/homeHeroSection";
import FeaturedPostSection from "@/components/featuredPostSection";
import ProductionTimeSection from "@/components/productionTimeSection";

/* ================================
   SANITY QUERY
   ================================ */
const pageQuery = `
*[_type == "page" && slug.current == $slug][0]{
  title,
  pageBuilder[]{
    _type,
    ...,
  }
}
`;

type PageProps = {
  params: {
    slug: string;
  };
};

/* ================================
   PAGE COMPONENT
   ================================ */
export default async function SlugPage({ params }: PageProps) {
  const page = await client.fetch(pageQuery, {
    slug: params.slug,
  });

  if (!page) {
    return notFound();
  }

  return (
    <main className="w-full">
      {/* OPTIONAL PAGE TITLE */}
      {/* <h1 className="sr-only">{page.title}</h1> */}

      {page.pageBuilder?.map((section: any, index: number) => {
        switch (section._type) {
          case "ContactUsSection":
            return <ContactUsSection key={index} {...section} />;

          case "homeHeroSection":
            return <HomeHeroSection key={index} {...section} />;

          case "featuredPostSection":
            return <FeaturedPostSection key={index} {...section} />;

          case "productionTimeSection":
            return <ProductionTimeSection key={index} {...section} />;

          case "imageSection":
            return <ImageSection key={index} {...section} />;

          default:
            return null;
        }
      })}
    </main>
  );
}
