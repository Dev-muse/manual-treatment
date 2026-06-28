// schemaTypes/condition.ts
export const condition = {
  name: 'condition',
  title: 'Treatable Conditions (Remedies)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Condition Name',
      type: 'string', // e.g., "Back and Neck Pain:"
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2, // e.g., "Ease stiffness, aches..."
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers display first',
    },
  ],
}