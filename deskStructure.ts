import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { ConfigContext } from "sanity";
import { StructureBuilder } from "sanity/structure";

export const sanityStructure = (S: StructureBuilder, context: ConfigContext) =>
  S.list()
    .title("Site")
    .items([
      S.listItem()
        .title("Home Page")
        .id("home")
        .child(
          S.document().schemaType("home").title("Home Page").documentId("home")
        ),
      S.listItem()
        .title("Work Page")
        .id("work")
        .child(
          S.document()
            .schemaType("work")
            .title("Work Page")
            .documentId("work")
      ),
      S.listItem()
        .title("Services Page")
        .id("services")
        .child(
          S.document()
            .schemaType("services")
            .title("Services Page")
            .documentId("contact")
      ),
      S.listItem()
        .title("Contact Page")
        .id("contact")
        .child(
          S.document()
            .schemaType("contact")
            .title("Contact Page")
            .documentId("contact")
        ),
      S.listItem()
        .title("Footer")
        .id("footer")
        .child(
          S.document()
            .schemaType("footer")
            .title("Footer")
            .documentId("footer")
        ),
      S.divider(),
      // TODO: remove this if unecesssary
      // ...S.documentTypeListItems().filter(
      //   (listitem) => !["home", "work", "services", "contact"].includes(listitem.getId() || "")
      // ),
      orderableDocumentListDeskItem({
        type: "workPage",
        S,
        context,
        title: "Work Secondary Pages",
      }),
      S.documentTypeListItem("serviceCategory").title("Service Categories"),
      S.documentTypeListItem("imageAssets").title("Image Assets"),
      S.documentTypeListItem("fileAssets").title("File Assets"),
    ]);
