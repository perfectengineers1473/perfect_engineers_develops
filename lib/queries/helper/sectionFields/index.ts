
import { buttonFields, richTextFields } from "../globalFields";
import { imageFields } from "../imageFields";

export const aboutHeroSectionFields = /* groq */ `
    _type,
    id,
    title,
    bgimage{${imageFields}},
    buttons[]{${buttonFields}}
`;

export const aboutLeftRightImageSectionFields = /* groq */ `
    _type,
    id,
    rightImageText[]{
        image{${imageFields}},
        title,
        titleText{${richTextFields}},
        button{${buttonFields}}
    },
    leftImageText[]{
        image{${imageFields}},
        title,
        titleText{${richTextFields}},
        button{${buttonFields}}
    }
`;

export const contactHeroSectionFields = /* groq */ `
    _type,
    id,
    image{${imageFields}},
    title,
    description,
    buttons[]{${buttonFields}}
`;

export const contactUsSectionFields = /* groq */ `
    _type,
    id,
    maintitle,
    titletext,
    contactUs[]{
        image{${imageFields}},
        title,
        text,
        description
    },
    businessHour[]{
        iconImage{${imageFields}},
        icontitle,
        textInfo[]
    }
`;

export const contactMapSectionFields = /* groq */ `
    _type,
    id,
    title,
    description,
    button{${buttonFields}}
`;


export const demoSectionFields = /* groq */ `
    _type,
    id,
    title,
    heroImage{${imageFields}},
    firstNameLabel,
    lastNameLabel,
    emailLabel,
    companyLabel,
    regionLabel,
    sourceLabel,
    disclaimer{${richTextFields}},
    submitButtonText{${buttonFields}}
`;

export const featuredPostSectionFields = /* groq */ `
    _type,
    id,
    maintitle,
    title,
    image{${imageFields}},
    button[]{${buttonFields}},
    features[]{
        type,
        title,
        date,
        featureImage{${imageFields}}
    }
`;

export const heroRemediateSectionFields = /* groq */ `
    _type,
    id,
    rating{
        source,
        value,
        numericValue,
        max
    },
    title,
    description{${richTextFields}},
    buttons[]{${buttonFields}}
`;

export const homeHeroSectionFields = /* groq */ `
    _type,
    id,
    title{${richTextFields}},
    description{${richTextFields}},
    lists[],
    buttons[]{${buttonFields}},
    image{${imageFields}},
    mobileImage{${imageFields}}
`;

export const homeRightImageSectionFields = /* groq */ `
    _type,
    id,
    items[]{
        title,
        titleText{${richTextFields}},
        button{${buttonFields}},
        image{${imageFields}}
    }
`;

export const imageSectionFields = /* groq */ `
    _type,
    id,
    image{${imageFields}}
`;

export const productionTimeSectionFields = /* groq */ `
    _type,
    id,
    Production[]{
        value,
        label
    },
    buttons[]{${buttonFields}}
`;

export const recentPostSectionFields = /* groq */ `
    _type,
    id,
    title,
    seemore,
    blog[]{
        image{${imageFields}},
        type,
        blogtitle,
        date
    }
`;

export const silentFeaturesSectionFields = /* groq */ `
    _type,
    id,
    title,
    logo[]{
        logoImage{${imageFields}}
    }
`;

export const specificationSectionFields = /* groq */ `
    _type,
    id,
    headline,
    description,
    categories[]{
        title,
        items[]{
            model,
            coolingCapacity,
            storageCapacity,
            height,
            depth,
            width,
            faucets
        }
    }
`

export const titleTextSectionFields = /* groq */ `
    _type,
    id,
    titleText[]{
        title,
        description{${richTextFields}}
    }
`;
