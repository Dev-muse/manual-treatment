import type {StructureResolver} from 'sanity/structure'

const HOMEPAGE_ID = 'homepage'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .id(HOMEPAGE_ID)
        .title('Homepage')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId(HOMEPAGE_ID)
        ),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'homePage'
      ),
    ])
