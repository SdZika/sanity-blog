import {defineField, defineType} from 'sanity'

export const post = defineType({
    title: 'Post',
    name: 'post',
    type: 'document',
    fields: [defineField(
      {
        name: 'title',
        type: 'string',
      }),
      defineField({
        name: 'slug',
        type: 'slug',
      }),
      defineField({
        name: 'publishedAt',
        type: 'datetime',
      }),
      defineField({
        name: 'body',
        type: 'array',
        of: [{type: 'block',}],
      }),
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  })
  
