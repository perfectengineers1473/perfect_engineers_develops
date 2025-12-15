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
            return link?.url ?? '#'
        case LINK_TYPES?.reference:
            return resolveLink({ slug: link?.slug, type: link?.pageType })
        default:
            return link?.url
    }
}
