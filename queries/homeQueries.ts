import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(`
  *[_type == "home"][0]{
    heroTitle,
    heroImage->{
      "imageUrl": image.asset->url,
      "imageName": name,
    },
    heroCTAButtonTxt,
    workGallery[]->{
      name,
      slug,
      workPageLayout[0]{
        workLayoutGallery[0]->{
          "imageUrl": image.asset->url,
          "imageName": name,
        }
      },
    },
    workCTAButtonTxt,
    serviceCTAButtonTxt,
    serviceHomeCategories[]->{
      serviceCatergoryTitle,
      serviceCategoryDescription
    },
    aboutImage->{
      "imageUrl": image.asset->url,
      "imageName": name,
    },
    aboutSubtitle,
    aboutContent,
    aboutGithub,
    aboutLinkedIn,
    meetGlacierSubtitle,
    meetGlacierContent,
    meetGlacierButtonCTA,
    glacierGallery[]->{
      "imageUrl": image.asset->url,
      "imageName": name,
    },
  }
`);