import { LinkType } from "../../sanity/types/linkType"
import { resolveLink } from "../resolveLink"


export enum LINK_TYPES {
    externalReference = 'externalReference',
    reference = 'reference',
    sectionReference = 'sectionReference',
}

export const resolveUrl = (link: LinkType) => {
    switch (link?.type) {
        case LINK_TYPES?.sectionReference:
            return link?.url || (link?.anchor ? `#${link.anchor}` : '#')
        case LINK_TYPES?.reference:
            return resolveLink({ slug: link?.slug || link?.page?.slug?.current, type: 'page' })
        default:
            return link?.url || link?.link || '#'
    }
}
