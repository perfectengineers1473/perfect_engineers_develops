
import { buttonFields, imageLabelLinkFields, labelLinkFields } from "../globalFields";
import { imageFields } from "../imageFields";
import { linkFields } from "../linkFields";


export const subNavItemFields = /* groq */ `
_type,
title,
select,
(@.select=="link") => { 
link{
${linkFields}
},
},
(@.select=="subNav") => { 
imageLabelLinks[]{
${imageLabelLinkFields}
},
}
`;


export const navItemFields = /* groq */ `
_type,
title,
select,
(@.select=="link") => { 
link{
${linkFields}
},
},
(@.select=="subNav") => { 
subNavTitle{
${labelLinkFields}
},
deskTopSubNavItems[]{
${imageLabelLinkFields}
},
"mobileSubNavItems":subNavItems[]{
${subNavItemFields}
},
}
`;

export const headerFields = /* groq */ `
_id,
_type,
logo{
${imageFields}
},
navItems[]{
${navItemFields}
},
cta{
${buttonFields}
}
`;
