import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
// import { singletonTools } from "sanity-plugin-singleton-tools"; // TODO: Waiting for version support of React 19
import { structureTool } from "sanity/structure";


// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, projectId} from './sanity/env'
import {schema, singletonTypes} from './sanity/schema'
import { sanityStructure } from './deskStructure';

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig([
  {
    basePath: '/studio',
    projectId,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    name: 'joshjensencreative-production',
    title: 'Josh Jensen Creative Production',
    subtitle: 'Production',
    plugins: [
      structureTool({
        structure: sanityStructure,
      }),
      visionTool({ defaultApiVersion: apiVersion }),
      // singletonTools(),
    ],
    schema: {
      types: schema.types,
      templates: (templates) =>
        templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
    },
    document: {
      actions: (input, context) => singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input
    },
  },
]);


