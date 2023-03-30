import { defineDocumentType, makeSource } from 'contentlayer/source-files'
// import { makeSource } from 'contentlayer/source-remote-files'
// import { createRequire } from 'module'

// const require = createRequire(import.meta.url)
// const theme = require('shiki/themes/material-ocean.json')

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fields: {
    author: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  disableImportAliasWarning: true,
})
