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
export const silentFeaturesSectionquery = `*[_type == "page"][0]{
    ...
}
`;

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
import {
  aboutHeroSectionFields,
  aboutLeftRightImageSectionFields,
  contactHeroSectionFields,
  contactMapSectionFields,
  contactUsSectionFields,
  demoSectionFields,
  featuredPostSectionFields,
  headerSectionFields,
  heroRemediateSectionFields,
  homeHeroSectionFields,
  homeRightImageSectionFields,
  imageSectionFields,
  navLinkSectionFields,
  productionTimeSectionFields,
  recentPostSectionFields,
  silentFeaturesSectionFields,
  specificationSectionFields,
  titleTextSectionFields,
} from "./helper/sectionFields";

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

export const pageBySlugQuery = `
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    pageBuilder[]{
      (_type == "aboutHeroSection") => {${aboutHeroSectionFields}},
      (_type == "aboutLeftRightImageSection") => {${aboutLeftRightImageSectionFields}},
      (_type == "contactHeroSection") => {${contactHeroSectionFields}},
      (_type == "contactMapSection") => { ${contactMapSectionFields} },
      (_type == "contactUsSection") => {${contactUsSectionFields}},
      (_type == "demoSection") => { ${demoSectionFields} },
      (_type == "featuredPostSection") => {${featuredPostSectionFields}},
      (_type == "heroRemediateSection") => {${heroRemediateSectionFields}},
      (_type == "homeHeroSections") => {${homeHeroSectionFields}},
      (_type == "homeRightImageSection") => {${homeRightImageSectionFields}},
      (_type == "imageSection") => {${imageSectionFields}},
      (_type == "productionTimeSection") => {${productionTimeSectionFields}},
      (_type == "recentPostSection") => {${recentPostSectionFields}},
      (_type == "silentFeaturesSection") => {${silentFeaturesSectionFields}},
      (_type == "specificationSection") => {${specificationSectionFields}},
      (_type == "titleTextSection") => {${titleTextSectionFields}},
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

export const headerSectionquery = `*[_type == "header"]{
  ...
}
`;
export const navlinkSectionquery = `*[_type == "navLink"]{
  ...
}
`;