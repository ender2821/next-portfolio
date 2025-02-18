import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(`
*[_type == "home"][0]{
  heroTitle,
  heroImage->{
    "imageUrl": image.asset->url,
    "imageName": name,
  },
  heroCTAButtonTxt
}
`);