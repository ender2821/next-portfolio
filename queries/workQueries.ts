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
        serviceCatergoryId
      },
      workPageLayout[0]{
        workLayoutContent,
      }
    }
  }
`);

export const WORK_PAGE_QUERY = defineQuery(`
  *[_type == "workPage" && slug.current == $slug][0]{
    name,
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