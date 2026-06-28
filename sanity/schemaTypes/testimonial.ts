// schemaTypes/testimonial.ts
export const testimonial = {
  name: 'testimonial',
  title: 'Patient Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Patient Name',
      type: 'string', // e.g., "Sharon Chung"
    },
    {
      name: 'username',
      title: 'Username / Subtitle (Optional)',
      type: 'string', // e.g., "Stroke Survivor" or "@sharonc"
    },
    {
      name: 'text',
      title: 'Review Text',
      type: 'text',
      rows: 5,
    },
    {
      name: 'image',
      title: 'Patient Avatar',
      type: 'image',
      options: {
        hotspot: true, // Allows cropping images around faces perfectly in the studio
      },
    },
  ],
}