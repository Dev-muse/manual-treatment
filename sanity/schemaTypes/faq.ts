export const faq = {
  name: 'faq',
  title: 'Frequently Asked Questions',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}