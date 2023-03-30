import glob from 'fast-glob'
import * as path from 'path'

// TODO: replace all this with contentlayer
async function importArticle(articleFilename) {
  let { meta, default: component } = await import(`../pages/articles/${articleFilename}`)
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/crafting-a-design-system-for-a-multiplanetary-future.mdx'], {
    cwd: path.join(process.cwd(), '_pages_/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
