/**
 * hexToRGB -
 * @param {string} hex       - hex representing color
 * @param {number} alpha     - format in which date should be returned
 * @returns {string}         - color in rgba format
 */

// eslint-disable-next-line import/prefer-default-export
export const hexToRGB = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgb(${r},${g},${b},${alpha})`
  }

  return `rgb(${r},${g},${b})`
}
