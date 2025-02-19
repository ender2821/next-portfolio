const isDev = false;

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-07-20'

export const dataset = assertValue(
  isDev ? 'development' : 'production',
  
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  // process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  '34oe4dz2',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}


