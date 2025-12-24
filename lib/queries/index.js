export const homeheroquery = `*[_type == "page"][0]{
    ...
}
`;
export const aboutLeftImagequery = `*[_type == "page"][0]{
    ...
}
`;
export const aboutHeroquery = `*[_type == "page"][0]{
    ...
}
`;
export const aboutLeftRightImagequery = `*[_type == "page"][0]{
    ...
}
`;
export const contactHeroquery = `*[_type == "page"][0]{
    ...
}
`;
export const contactMapquery = `*[_type == "page"][0]{
    ...
}
`;
export const contactUsSectionquery = `*[_type == "page"][0]{
    ...
}
`;
export const featuredPostquery = `*[_type == "page"][0]{
    ...
}
`;
export const heroRemediatequery = `*[_type == "page"][0]{
    ...
}
`;
export const homeRightImagequery = `*[_type == "page"][0]{
    ...
}
`;
export const imagequery = `*[_type == "page"][0]{
    ...
}
`;
export const productionTimequery = `*[_type == "page"][0]{
    ...
}
`;
export const titleTextquery = `*[_type == "page"][0]{
    ...
}
`;
// ... existing imports

// ... keep other queries ...

// FIXED: Added 'btn' so the button data is fetched
export const headerquery = `*[_type == "header"]{
  logo {
    asset->{
      url
    }
  },
  logotitle,
  btn {
    label,
    link
  },
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

// ... keep footerquery and others ...

// ... existing code

import { groq } from "next-sanity";

// ... keep navbarquery as is ...

export const footerquery = groq`
  *[_type == "footer"]{
    title,
    titletext,
    btn,

    sociallogolink[] {
      sociallogo,
      sociallogolink
    },

    titlelabellink[] {
      maintitle,
      label[] {
        label,
        link
      }
    }
  }
`;


// ... keep footerbottomquery as is ...


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

export const allPagesSlugQuery = `
  *[_type == "page"]{
    "slug": slug.current
  }
`;

export const footerbottomquery = `*[_type == "footerbottom"] {
  leftsidetext,
  centertextlink,
  rightsidetext,
}
`;
