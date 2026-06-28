// sanity/lib/queries.ts
import { defineQuery } from 'next-sanity'

export const HOME_PAGE_QUERY = defineQuery(`{
  "pageData": *[_type == "homePage"][0] {
    heroEyebrow,
    heroHeading,
    heroDescription,
    remediesEyebrow,
    remediesHeading,
    remediesDescription,
    remediesListTitle,
    remediesVideoPoster,
    remediesVideoUrl,
    clientsHeading,
    clientsDescription,
    ctaHeading,
    ctaDescription,
    ctaImage
  },
  "conditions": *[_type == "condition"] | order(order asc) {
    name,
    description
  },
  "faqs": *[_type == "faq"] | order(order asc) {
    question,
    answer
  },
  "testimonials": *[_type == "testimonial"] {
    name,
    username,
    text,
    image
  }
}`)

// Define the precise structure for your homepage data fetch
export interface HomePageData {
  pageData: {
    heroEyebrow?: string
    heroHeading?: string
    heroDescription?: string
    remediesEyebrow?: string
    remediesHeading?: string
    remediesDescription?: string
    remediesListTitle?: string
    remediesVideoPoster?: any
    remediesVideoUrl?: string
    clientsHeading?: string
    clientsDescription?: string
    ctaHeading?: string
    ctaDescription?: string
    ctaImage?: any
  } | null
  conditions: Array<{
    name: string
    description: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
  testimonials: Array<{
    name: string
    username?: string
    text: string
    image?: any
  }>
}