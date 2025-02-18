import { type SchemaTypeDefinition } from 'sanity'
import { contact } from './schemas/contact'
import { footer } from './schemas/footer'
import { home } from './schemas/home'
import { imageAssets } from './schemas/imageAssets'
import { serviceCategory } from './schemas/serviceCategory'
import { serviceCategoryList } from './schemas/serviceCategoryList'
import { services } from './schemas/services'
import { work } from './schemas/work'
import { workLayout } from './schemas/workLayout'
import { workPage } from './schemas/workPages'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    contact,
    footer,
    home,
    imageAssets,
    serviceCategory,
    serviceCategoryList,
    services,
    work,
    workLayout,
    workPage,
  ],
}

export const singletonTypes = new Set([
  'contact',
  'footer',
  'home',
  'services',
  'work',
])