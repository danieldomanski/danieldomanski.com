/**
 * formatSlice - given slice as an argument, return data in formatted manner
 * @param slice      - Raw prismic slice
 * @returns {object} - Object containg data according to slice type
 */

export const formatSlice = slice => {
  switch (slice.slice_type) {
    case 'image':
      return { localFile: slice.primary.image.localFile }
    case 'detail':
      return {
        localFile: slice.primary.image.localFile,
        title: slice.primary.detailtitle.text,
        description: slice.primary.detaildescription1.text,
      }
    case 'mockup':
      return {
        desktop: slice.primary.desktop1.localFile,
        mobile: slice.primary.mobile.localFile,
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

  slices.map(slice =>
    slice.slice_type === type ? results.push(formatSlice(slice)) : null
  )

  return results
}
