import { type SchemaTypeDefinition } from 'sanity'
import { homePage } from './homePage'
import { condition } from './condition'
import { faq } from './faq'
import { testimonial } from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    condition,
    faq,
    testimonial,
  ],
}