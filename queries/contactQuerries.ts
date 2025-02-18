import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(`
*[_type == "contact"][0]{
  contactHeroSubtitle,
  contactHeroImage->{
    "imageUrl": image.asset->url,
    "imageName": name,
  },
  contactSectionTitle,
  contactSectionSubtitle,
  contactSectionImage->{
    "imageUrl": image.asset->url,
    "imageName": name,
  },
}
`);