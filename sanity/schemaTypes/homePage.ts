// schemaTypes/homePage.ts
export const homePage = {
  name: 'homePage',
  title: 'Homepage Content',
  type: 'document',
  fields: [
    // --- HERO SECTION ---
    {
      name: 'heroEyebrow',
      title: 'Hero Eyebrow Text',
      type: 'string', // "Chronic Pain Holding You Back?"
    },
    {
      name: 'heroHeadingParts',
      title: 'Hero Headline',
      type: 'array',
      description: 'Add each word or phrase as a separate item. Toggle "Serif italic" on the words that should appear coloured and styled.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Word or Phrase',
              type: 'string',
            },
            {
              name: 'accent',
              title: 'Serif italic (coloured)',
              type: 'boolean',
              initialValue: false,
            },
          ],
          preview: {
            select: { title: 'text', accent: 'accent' },
            prepare({ title, accent }: { title: string; accent: boolean }) {
              return { title: title || '(empty)', subtitle: accent ? '✦ serif italic' : '' }
            },
          },
        },
      ],
    },
    {
      name: 'heroDescription',
      title: 'Hero Body Paragraph',
      type: 'text',
      rows: 4,
    },

    // --- REMEDIES SECTION ---
    {
      name: 'remediesEyebrow',
      title: 'Remedies Eyebrow Text',
      type: 'string', // "Remedies"
    },
    {
      name: 'remediesHeadingParts',
      title: 'Remedies Heading',
      type: 'array',
      description: 'Add each word or phrase as a separate item. Toggle "Serif" on the words that should appear coloured.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Word or Phrase',
              type: 'string',
            },
            {
              name: 'accent',
              title: 'Serif (coloured)',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'newLine',
              title: 'Start on new line',
              type: 'boolean',
              initialValue: false,
            },
          ],
          preview: {
            select: { title: 'text', accent: 'accent' },
            prepare({ title, accent }: { title: string; accent: boolean }) {
              return { title: title || '(empty)', subtitle: accent ? '✦ serif' : '' }
            },
          },
        },
      ],
    },
    {
      name: 'remediesDescription',
      title: 'Remedies Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'remediesListTitle',
      title: 'Remedies List Subtitle',
      type: 'string', // "Here are some of the common conditions..."
    },
    {
      name: 'remediesVideoPoster',
      title: 'Remedies Video Poster Image',
      type: 'image',
      options: { hotspot: true }, // Replaces "poster-video.jpg"
    },
    {
      name: 'remediesVideoUrl',
      title: 'Remedies MP4 Video File URL',
      type: 'string',
      description: 'Direct link to your hosting asset, CDN, or public folder string (e.g., /Remedy.mp4)',
    },

    // --- CLIENTS SECTION ---
    {
      name: 'clientsHeading',
      title: 'Clients Heading',
      type: 'string', // "Why Our Patients Love Us"
    },
    {
      name: 'clientsDescription',
      title: 'Clients Description Text',
      type: 'text',
      rows: 2, // "We're trusted by over 500 patients..."
    },

    // --- CTA SECTION ---
    {
      name: 'ctaHeading',
      title: 'CTA Heading',
      type: 'string', // "Ready To Reclaim Your Body?"
    },
    {
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'ctaImage',
      title: 'CTA Section Image',
      type: 'image',
      options: { hotspot: true }, // Replaces cta-image.jpg
    },
  ],
}