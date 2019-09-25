/**
 * formatSlice - given slice as an argument, return data in formatted manner
 * @param slice      - Raw prismic slice
 * @returns {object} - Object containg data according to slice type
 */

export const formatSlice = slice => {
  switch (slice.slice_type) {
    case 'mockup':
      return {
        desktop: slice.primary.desktop1.localFile,
        mobile: slice.primary.mobile.localFile,
      }
    case 'multiimage':
      return slice.items.map(item => ({
        localFile: item.image.localFile,
      }))
    case 'imagewithcaption':
      return {
        localFile: slice.primary.image.localFile,
        title: slice.primary.title1.text,
        description: slice.primary.description1.text,
      }
    case 'info':
      return {
        role: slice.primary.role.text,
        technologies: slice.primary.technologies.text,
        client: slice.primary.client.text,
      }
    case 'video':
      return {
        src: slice.primary.src.url,
        title: slice.primary.title1.text,
        description: slice.primary.description1.text,
      }
    default:
      return {}
  }
}

/**
 * getSliceContent - Given slices as an array, return item of given type
 * @param slices     - array of custom slices in Prismic Custom Type
 * @param type       - slice type that we want to get returned
 * @returns {string} - Object of raw slice data
 */

export const getSliceContent = (slices, type) => {
  const results = []
  const result = {}
  const keys = slices.map(slice => slice.slice_type)

  slices.map(slice => {
    console.log({ slice1: formatSlice(slice) })
  })
  slices.map(slice =>
    slice.slice_type === type ? results.push(formatSlice(slice)) : null
  )
  console.log({ result, keys })
  return results
}
