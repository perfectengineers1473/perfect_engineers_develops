import type { SanityClient } from 'next-sanity'
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../../config'

export function getClient(token?: string): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    useCdn,
    apiVersion,
    perspective: 'published',
  })

  return token
    ? client.withConfig({
      token: token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
    : client
}
