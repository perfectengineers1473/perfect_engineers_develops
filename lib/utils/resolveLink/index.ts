export const resolveLink = ({ slug, type }: { slug: string; type: string }) => {
  switch (type) {
    case "page":
      return slug?.startsWith("/") ? slug : `/${slug}`;
    case "caseStudies":
      return slug?.startsWith("/") ? slug : `/case-studies/${slug}`;
    case "blogs":
      return slug?.startsWith("/") ? slug : `/blog/${slug}`;
    default:
      return slug?.startsWith("/") ? slug : `/${slug}`;
  }
};
