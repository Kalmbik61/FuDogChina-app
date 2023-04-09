import {Rule} from 'sanity'

export default {
  name: 'menuCategory',
  type: 'document',
  title: 'Menu category',
  fields: [
    {name: 'categoryName', type: 'string', title: 'Category Name'},
    {
      name: 'categoryMeals',
      type: 'array',
      title: 'Meals',
      of: [
        {
          type: 'reference',
          to: {
            type: 'meals',
            title: 'Meals',
          },
        },
      ],
      validation: (Rule: Rule) => Rule.optional(),
    },
  ],
}
