import { css } from 'styled-components'

export default css`
  div > p,
  li {
    ${tw`font-serif  leading-relaxed`}
    margin-bottom: 2rem;
    color: #17191c;
  }

  .anchor a {
    ${tw`relative inline-block font-sans no-underline`};
    text-decoration: none;
    font-weight: 600;
    color: #739fff;

    &:after {
      content: '';
      ${tw`w-full absolute pin-l`};
      transition: 0.5s ease-in-out;
      z-index: -1;
      height: 2px;
      bottom: 2px;
      background-color: #739fff;
    }

    &:hover {
      color: #739fff;
      background-color: #dce4f8;

      &:after {
        background-color: #739fff;
      }
    }
  }

  code {
    font-size: 14px;
  }

  h1 {
    ${tw`font-sans text-2xl`}
    line-height: 125%;
    font-weight: 800;
    margin-top: 3.5rem;
    margin-bottom: 1.75rem;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: white;
    background: none;
    font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New,
      monospace;
    font-feature-settings: normal;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    margin-bottom: 0;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    overflow: auto;
    padding: 1.3125rem;
  }

  pre[class*='language-']::-moz-selection {
    /* Firefox */
    background: hsl(207, 4%, 16%);
  }

  pre[class*='language-']::selection {
    /* Safari */
    background: hsl(207, 4%, 16%);
  }

  /* Text Selection colour */
  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    border-radius: 0.3em;
    padding: 0.15em 0.2em 0.05em;
    white-space: normal;
  }

  .token.attr-name {
    color: rgb(173, 219, 103);
    font-style: italic;
  }

  .token.comment {
    color: rgb(128, 147, 147);
  }

  .token.string,
  .token.url {
    color: rgb(173, 219, 103);
  }

  .token.variable {
    color: rgb(214, 222, 235);
  }

  .token.number {
    color: rgb(247, 140, 108);
  }

  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: #739fff;
  }

  .token.punctuation {
    color: rgb(199, 146, 234);
  }

  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: 'italic';
  }

  .token.class-name {
    color: #ffbf72;
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    color: #ff8ab1;
  }

  .token.boolean {
    color: rgb(255, 88, 116);
  }

  .token.property {
    color: rgb(128, 203, 196);
  }

  .token.namespace {
    color: rgb(178, 204, 214);
  }

  .highlighted {
    font-family: 'Consolas';
    background: #e3e6ea;
    border-radius: 0.2rem;
    color: #333;
    padding: 0.15em 0.2em;
  }

  hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 2rem;
  }
`
