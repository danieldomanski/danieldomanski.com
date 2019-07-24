const { RichText } = require('prismic-dom')

// We don't want to import every PrismJS component - so that's why they're required individually
const Prism = require('prismjs')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-scss')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-json')
require('prismjs/components/prism-diff')
require('prismjs/components/prism-markdown')
require('prismjs/components/prism-graphql')

const { Elements } = RichText

// Labels with this name will be inline code
const codeInline = ['text']
// Labels with these names will become code blocks
const codeBlock = [
  'javascript',
  'css',
  'scss',
  'jsx',
  'bash',
  'json',
  'diff',
  'markdown',
  'graphql',
]

const htmlSerializer = (type, element, content) => {
  switch (type) {
    // First differentiate between a label and a preformatted field (e.g. the Code Block slice)
    case Elements.label: {
      if (element.label === 'hr') {
        return `<hr/>`
      }
      // Use the p tag for labels with "text" label
      if (codeInline.includes(element.data.label)) {
        return `<p>${content}</p>`
      }

      // Use the code block for labels that are in the array of "codeBlock"
      // Choose the right PrismJS highlighting with the label name
      if (codeBlock.includes(element.data.label)) {
        return `<pre class="language-${
          element.data.label
        }"><code class="language-${element.data.label}">${Prism.highlight(
          content,
          Prism.languages[element.label]
        )}</code></pre>`
      }
      return null
    }
    case Elements.preformatted: {
      if (codeBlock.includes(element.label)) {
        return `<pre class="language-${element.label}"><code class="language-${
          element.label
        }">${Prism.highlight(
          element.text,
          Prism.languages[element.label]
        )}</code></pre>`
      }
      return null
    }
    case Elements.paragraph: {
      if (element.label === 'hr') {
        return `<hr/>`
      }
      return null
    }
    default: {
      return null
    }
  }
}

module.exports = htmlSerializer
