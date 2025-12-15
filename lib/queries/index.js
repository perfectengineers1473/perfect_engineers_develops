export const homeheroquery = `*[_type == "page"][0]{
    ...
}
`;

export const aboutLeftImagequery = `*[_type == "page"][0]{
    ...
}
`;

export const pageBySlugQuery = `
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    pageBuilder[]{
      ...,
      // EXPAND POSTS INSIDE FEATURE POSTS BLOCK
      posts[]->{
        _id,
        title,
        slug,
        excerpt,
        mainImage { asset->{ url } }
      }
    }
  }
`;


export const headerquery = `*[_type == "header"]{
  logo {
    asset->{
      url
    }
  },
  logotitle,
  sociallogolink[]{
    sociallogo {
      asset->{
        url
      }
    },
    sociallogolink
  }
}
`;

export const navlinkquery = `*[_type == "navLink"]{
  "links": links[] {
    label,
    link
  }
}
`;

export const featurepostquery = `*[_type == "featuredpost"] {
  maintitle,
  title,
  image {
    asset -> {
      url
    }
  },
  buttonText,
  buttonUrl,
  features[] {
    type,
    title,
    date,
    featureImage {
      asset -> {
        url
      }
    }
  }
}
`;

export const recentpostquery = `*[_type == "recentpost"] {
  title,
  seemore,
  blog[] {
    image{
    asset-> {
      url
    }
    },
    type,
    blogtitle,
    date
  }
}
`;

export const footerquery = `*[_type == "footer"] {
  title,
  titletext,
  btn{
    label,
    link,
  },
  sociallogolink[] {
    sociallogo {
      asset->{
        url
      }
    },
    sociallogolink
  }
}
`;

export const footerbottomquery = `*[_type == "footerbottom"] {
  leftsidetext,
  centertextlink,
  rightsidetext,
}
`;
