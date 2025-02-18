import { defineQuery } from "next-sanity";

export const SERVICES_QUERY = defineQuery(`
  *[_type == "services"][0]{
    servicesHeroSubtitle,
    servicesHeroImage->{
      "imageUrl": image.asset->url,
      "imageName": name,
    },
    servicesCtaButtonTxt,
    servicesServiceList[]->{
      serviceCatergoryTitle,
      serviceCatergoryId,
      serviceCategoryImage->{
        "imageUrl": image.asset->url,
        "imageName": name,
      },
      serviceCategories[]{
        serviceCatergoryListTitle,
        serviceCatergoryListTags,
        serviceCatergoryListDescriptions
      }
    }
  }
`);