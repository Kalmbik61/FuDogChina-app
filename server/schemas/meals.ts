import {Rule} from 'sanity'

export default {
  name: 'meals',
  type: 'document',
  title: 'Meals',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'menuCategory'}],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule: Rule) => Rule.optional(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'additional',
      type: 'array',
      title: 'Additional',
      validation: (Rule: Rule) => Rule.optional(),
      of: [
        {
          type: 'additionalType',
          title: 'additionalType',
        },
      ],
    },
  ],
}
