import words from 'lodash.words'

export const countWordsFromSlices = slices => {
  const content = []

  slices.map(slice => {
    if (slice.slice_type === 'text') {
      content.push(slice.primary.text.text)
    }
    if (slice.slice_type === 'code_block') {
      content.push(slice.primary.code_block.text)
    }
    return null
  })

  return words(content.join(' ')).length
}

/**
 * Fulltext - Get the complete content of a post to e.g. use it for wordCount or a timeToRead feature
 * @param slices
 * @returns {string} - The content of the slice in text form
 */

export const timeToRead = words => {
  const wordsPerMinute = 226

  const time = Math.ceil(words / wordsPerMinute)

  return time
}
