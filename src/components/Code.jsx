import Prism from 'prismjs'
import { useEffect } from 'react'

// [
//   'a11y-dark',
//   'darcula',
//   'duotone-light',
//   'hopscotch',
//   'atom-dark',
//   'duotone-dark',
//   'duotone-sea',
//   'pojoaque',
//   'base16-ateliersulphurpool.light',
//   'duotone-earth',
//   'duotone-space',
//   'vs',
//   'cb',
//   'duotone-forest',
//   'ghcolors',
//   'xonokai'
// ]

const MyComponent = ({ text, lang, theme }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className="code-container">
      <link rel="stylesheet" href={`/prism/themes/prism-${theme}.css`} />
      <pre className="code-block">
        <code className={`language-${lang}`} style={{ letterSpacing: 0.6 }}>
          {text}
        </code>
      </pre>
    </div>
  )
}

export default MyComponent
