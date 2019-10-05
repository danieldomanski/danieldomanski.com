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
      return {
        id: slice.id,
        title: slice.primary.title1.text,
        description: slice.primary.description1.text,
        items: slice.items.map(item => ({
          localFile: item.image.localFile,
        })),
      }
    case 'imagewithcaption':
      return {
        id: slice.id,
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

export const getSliceContent = slices => {
  const result = {}

  slices.map(slice => {
    const type = slice.slice_type
    if (type === 'multiimage' || type === 'imagewithcaption') {
      if (!result[type]) {
        result[type] = []
      }

      return result[type].push(formatSlice(slice))
    }

    result[type] = formatSlice(slice)
  })

  return result
}
