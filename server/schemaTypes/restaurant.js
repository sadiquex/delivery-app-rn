import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Restaurant desc',
      validation: (rule) => rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Restaurant image',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (rule) => rule.required(),
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of location ',
    },
    {
      name: 'lng',
      type: 'number',
      title: 'Longitude of location ',
    },
    {
      name: 'rating',
      type: 'string',
      title: 'Rate the restaurant between 1 and 5',
      validation: (rule) => rule.required().min(1).max(5).error('Between 1 and 5'),
    },
    {
      name: 'reviews',
      type: 'string',
      title: 'Reviews',
    },
    {
      name: 'type',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
})
