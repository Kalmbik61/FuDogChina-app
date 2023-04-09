import {Rule} from 'sanity'

export default {
  name: 'menu',
  type: 'document',
  title: 'Menu',
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
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type of meal',
      options: {
        list: [
          {title: 'MEAT', value: 'MEAT'},
          {title: 'DRINKS', value: 'DRINKS'},
        ],
      },
      validation: (Rule: Rule) =>
        Rule.required()
          .custom((value) => {
            if (value === 'MEAT' || value === 'DRINKS') {
              return true
            } else {
              return "Must be 'MEAL' or 'DRINKS'"
            }
          })
          .warning(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
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
