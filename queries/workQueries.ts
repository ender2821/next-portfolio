import { defineQuery } from "next-sanity";

export const WORK_PAGE_QUERY = defineQuery(`
  *[_type == "workPage" && slug.current == $slug][0]{
    name,
    secondaryTitle,
    workPageMainGallery[0]->{
      "imageUrl": image.asset->url,
      "imageName": name,
    },
    workPageLayout[]{
      workLayoutTitle,
      workLayoutSubtitle,
      workLayoutContent,
      workLayoutGallery[]->{
        "imageUrl": image.asset->url,
        "imageName": name,
      }
    }
  }
`);