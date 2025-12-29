import { buttonFields, imageLabelLinkFields, imageWithLinkFields, labelLinkFields, richTextFields } from "../globalFields";
import { imageFields } from "../imageFields";

export const footerLinkFields = /* groq */ ` 
_type,
title,
labelLinks[]{
${labelLinkFields}
}
`

export const footerFields = /* groq */ `
_id,
_type,
bottomDescription,
logo{
${imageFields}
},
content{
${richTextFields}
},
letsConnect{
${richTextFields}
},
cta{
${buttonFields}
},
socialLinks[]{
${imageWithLinkFields}
},
partnerLogos[]{
${imageFields}
},
footerLinks[]{
${footerLinkFields}
},
connectWithUs[]{
${imageLabelLinkFields}
}
`;