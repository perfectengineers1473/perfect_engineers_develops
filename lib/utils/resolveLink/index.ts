export const resolveLink = ({ slug, type }: { slug?: string; type?: string }) => {
  if (!slug) {
    return '#';
  }
  switch (type) {
    case "page":
      return slug?.startsWith("/") ? slug : `/${slug}`;
    default:
      return slug?.startsWith("/") ? slug : `/${slug}`;
  }
};
