import {defineField, defineType} from 'sanity'

export const post = defineType({
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    defineField({
      name: 'postType',
      type: 'string',
      options: {
        list: ['html', 'css', 'react', 'javascript', 'tailwind'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
    }),
    defineField({
      name: 'publishedAt',
      type: 'date',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
