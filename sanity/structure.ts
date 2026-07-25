import type {StructureResolver} from 'sanity/structure'

const HOMEPAGE_ID = 'homepage'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('homePage')
        .documentId(HOMEPAGE_ID)
        .title('Homepage'),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'homePage'
      ),
    ])
