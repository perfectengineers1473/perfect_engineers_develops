import { imageFields } from "../imageFields";
import { linkFields } from "../linkFields";

export const richTextFields = /* groq */ `
_type,
custom_rich_text,
"richTextLinks":custom_rich_text["block"==@._type].markDefs["link"==@._type]{
_type,
link{
${linkFields}
},
}
`;
export const buttonFields = /* groq */ `
_type,
variant,
label,
(@.variant=="withIcon") => { 
icon{
${imageFields}
},
},
link{
${linkFields}
}
`;
export const labelLinkFields = /* groq */ `
_type,
link{
${linkFields}
},
label
`;


export const imageLabelLinkFields = /* groq */ `
_type,
image{
${imageFields}
},
labelLink{
${labelLinkFields}
}
`;

export const imageTitleLabelLinkFields = /* groq */ `
_type,
title,
image{
${imageFields}
},
labelLinks[]{
${labelLinkFields}
}
`;
export const imageTitleFields = /* groq */ `
_type,
title,
image{
${imageFields}
}
`;
export const imageContentFields = /* groq */ `
_type,
content{
${richTextFields}
},
image{
${imageFields}
}
`;
export const imageBlockFields = /* groq */ `
_type,
alignment,
image{
${imageFields}
},
title{
${richTextFields}
},
description{
${richTextFields}
},
cta{
${buttonFields}
},
hasWithList,
hasWithList == true =>{
headline,
lists,
}
`;
export const imageTitleDescriptionFields = /* groq */ `
_type,
title,
description{
${richTextFields}
},
image{
${imageFields}
},
labelLink{
${labelLinkFields}
}
`;

export const headlineImageTitleDescriptionButtonFields = /* groq */ `
_type,
id,
headline{
${richTextFields}
},
title{
${richTextFields}
},
description{
${richTextFields}
},
image{
${imageFields}
},
cta{
${buttonFields}
}
`;
export const titleDescriptionFields = /* groq */ `
_type,
title{
${richTextFields}
},
description{
${richTextFields}
}
`;

export const questionAndAnswerFields = /* groq */ `
_type,
question,
answer{
${richTextFields}
}
`;

export const singleImageFields = /* groq */ `
_type,
title,
description{
${richTextFields}
},
alignment,
image{
${imageFields}
}
`;
export const featureImageFields = /* groq */ `
_type,
hasFullWidth,
image{
${imageFields}
}
`;
export const withSliderFields = /* groq */ `
_type,
title,
description{
${richTextFields}
},
hasFull,
image[]{
${imageFields}
}
`;

export const whyChooseBryantDigitalFields = /* groq */ `
_type,
title{
${richTextFields}
},
description{
${richTextFields}
},
image{
${imageFields}
},
labelLink{
${labelLinkFields}
}
`;
export const imageTitleDescriptionButtonFields = /* groq */ `
_type,
id,
headline,
hasWithBackGround,
hasLists,
lists,
title{
${richTextFields}
},
description{
${richTextFields}
},
cta{
${buttonFields}
},
image{
${imageFields}
}
`;
export const footerBannerFields = /* groq */ `
_type,
_id,
title{
${richTextFields}
},
rotatingSubtitles,
description{
${richTextFields}
},
lists,
cta{
${buttonFields}
}
`;
export const locationDetailFields = /* groq */ `
_type,
title{
${richTextFields}
},
subTitle{
${richTextFields}
},
select,
(@.select=="description") => { 
description{
${richTextFields}
},
},
(@.select=="imageContent") => { 
imageContent[]{
${imageContentFields}
},
}
`;