/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import { singletonTools } from "sanity-plugin-singleton-tools"; // TODO: Waiting for version support of React 19
import { structureTool } from "sanity/structure";


// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { sanityStructure } from './deskStructure';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: sanityStructure,
    }),
    visionTool({defaultApiVersion: apiVersion}),
    // singletonTools(),
  ],
})

