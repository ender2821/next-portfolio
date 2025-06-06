import { defineQuery } from "next-sanity";

export const WORK_QUERY = defineQuery(`
  *[_type == "work"][0]{
    heroSubtitle,
    heroImage->{
      "imageUrl": image.asset->url,
      "imageName": name,
    },
    ctaButtonTxt,
    workPages[]->{
      name,
      slug,
      workPageMainGallery[]->{
        "imageUrl": image.asset->url,
        "imageName": name,
      },
      workPageServiceCategory->{
        "id": serviceCatergoryId.current
      },
      workPageLayout[0]{
        workLayoutContent,
      },
    }
  }
`);