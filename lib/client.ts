import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../sanity/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token:process.env.NEXT_PUBLIC_SANITY_APITOKEN,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
