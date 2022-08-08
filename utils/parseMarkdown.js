// https://stackoverflow.com/questions/67012728/use-nuxt-content-to-display-markdown-fetched-from-a-database
import Markdown from '@nuxt/content/parsers/markdown'
import { getDefaults, processMarkdownOptions } from '@nuxt/content/lib/utils'

export async function parseMarkdown(md) {
  const options = getDefaults()
  processMarkdownOptions(options)
  return new Markdown(options.markdown).toJSON(md) // toJSON() is async
}