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
      name: 'heroHeading',
      title: 'Hero Main Headline',
      type: 'string',
      description: 'e.g. "Move Better, Feel Better,"',
    },
    {
      name: 'heroHeadingAccent',
      title: 'Hero Headline Accent (serif italic)',
      type: 'string',
      description: 'Displays in serif italic after the main headline. e.g. "Live Better."',
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
      name: 'remediesHeading',
      title: 'Remedies Heading',
      type: 'string',
      description: 'e.g. "Don\'t let pain"',
    },
    {
      name: 'remediesHeadingAccent',
      title: 'Remedies Heading Accent (serif)',
      type: 'string',
      description: 'Displays in serif colour on a new line. e.g. "Hold You Back"',
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