import Head from 'next/head'
import data from '../js/data'

export default function Index() {
  return (
    <>
      <Head>
        <title>{'Profile'}</title>
        <meta
          name="description"
          content={`${data.name},${data.githubUsername} website, ${data.work},  ${data.address}, ${data.des}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/jpg" href="/images/linux.ico" />
      </Head>

      <div
        className=""
        style={{
          background: 'white',
          padding: 200,
          paddingTop: 50,
          lineHeight: 1.5,
          fontSize: '20px'
        }}
      >
        <h4
          style={{
            WebkitTextSizeAdjust: '100%',
            '--primary-nav-height': '73px',
            '--announcement-bar-height': '0px',
            '--content-spacing': '64px',
            '--scroll-padding-top':
              'calc(var(--top-hat-height) + var(--primary-nav-height) + var(--sub-nav-height) + var(--announcement-bar-height) + var(--content-spacing))',
            '--sub-nav-height': '60px',
            '--top-hat-height': '38px',
            WebkitFontSmoothing: 'antialiased',
            textRendering: 'optimizeLegibility',
            boxSizing: 'border-box',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 'bold',
            letterSpacing: '1px',
            lineHeight: '24px',
            margin: '20px 0px 8px',
            textTransform: 'capitalize',
            color: 'rgb(0, 105, 255)'
          }}
        >
          {'// Tutorial //'}
        </h4>

        <h1
          style={{
            WebkitTextSizeAdjust: '100%',
            '--primary-nav-height': '73px',
            '--announcement-bar-height': '0px',
            '--content-spacing': '64px',
            '--scroll-padding-top':
              'calc(var(--top-hat-height) + var(--primary-nav-height) + var(--sub-nav-height) + var(--announcement-bar-height) + var(--content-spacing))',
            '--sub-nav-height': '60px',
            '--top-hat-height': '38px',
            WebkitFontSmoothing: 'antialiased',
            textRendering: 'optimizeLegibility',
            boxSizing: 'border-box',
            color: 'rgb(3, 27, 78)',
            fontFamily: 'Epilogue, sans-serif',
            fontStyle: 'normal',
            fontWeight: 'bold',
            letterSpacing: '-0.5px',
            lineHeight: '40px',
            margin: '0px',
            padding: '0px',
            wordBreak: 'break-word',
            fontSize: '32px'
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eius?
        </h1>

        <div
          style={{
            WebkitTextSizeAdjust: '100%',
            '--primary-nav-height': '73px',
            '--announcement-bar-height': '0px',
            '--content-spacing': '64px',
            '--scroll-padding-top':
              'calc(var(--top-hat-height) + var(--primary-nav-height) + var(--sub-nav-height) + var(--announcement-bar-height) + var(--content-spacing))',
            '--sub-nav-height': '60px',
            '--top-hat-height': '38px',
            fontFamily: 'Inter,sans-serif',
            WebkitFontSmoothing: 'antialiased',
            textRendering: 'optimizeLegibility',
            fontSize: '20px',
            lineHeight: 1.5,
            boxSizing: 'border-box',
            WebkitBoxAlign: 'center',
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <div
            style={{
              WebkitTextSizeAdjust: '100%',
              '--primary-nav-height': '73px',
              '--announcement-bar-height': '0px',
              '--content-spacing': '64px',
              '--scroll-padding-top':
                'calc(var(--top-hat-height) + var(--primary-nav-height) + var(--sub-nav-height) + var(--announcement-bar-height) + var(--content-spacing))',
              '--sub-nav-height': '60px',
              '--top-hat-height': '38px',
              fontFamily: 'Inter,sans-serif',
              WebkitFontSmoothing: 'antialiased',
              textRendering: 'optimizeLegibility',
              boxSizing: 'border-box',
              color: 'rgb(77, 91, 124)',
              fontSize: '16px',
              lineHeight: '24px',
              margin: '8px 0px'
            }}
          >
            Published on May 13, 2016 · Updated on October 27, 2021
          </div>
          <ul
            style={{
              padding: '10px 0px',
              width: '100%'
            }}
          >
            <li
              style={{
                display: 'flex',
                padding: '10px 0px',
                width: '100%',
                flexWrap: 'wrap',
                gap: 20
              }}
            >
              <a
                style={{
                  WebkitTextSizeAdjust: '100%',
                  '--primary-nav-height': '73px',
                  '--announcement-bar-height': '0px',
                  '--content-spacing': '64px',
                  '--scroll-padding-top':
                    'calc(var(--top-hat-height) + var(--primary-nav-height) + var(--sub-nav-height) + var(--announcement-bar-height) + var(--content-spacing))',
                  '--sub-nav-height': '60px',
                  '--top-hat-height': '38px',
                  fontFamily: 'Inter,sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  textRendering: 'optimizeLegibility',
                  listStyle: 'none',
                  boxSizing: 'border-box',
                  background: 'rgb(239, 242, 251)',
                  borderRadius: '8px',
                  color: 'rgb(77, 91, 124)',
                  cursor: 'pointer',
                  display: 'inline-block',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 1.71429,
                  margin: '4px 8px 4px 0px',
                  padding: '0px 8px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'background 0.15s linear 0s, color 0.15s linear 0s',
                  marginLeft: '0px'
                }}
              >
                Node.js
              </a>
              <a
                style={{
                  WebkitTextSizeAdjust: '100%',
                  '--primary-nav-height': '73px',
                  '--announcement-bar-height': '0px',
                  '--content-spacing': '64px',
                  '--scroll-padding-top':
                    'calc(var(--top-hat-height) + var(--primary-nav-height) + var(--sub-nav-height) + var(--announcement-bar-height) + var(--content-spacing))',
                  '--sub-nav-height': '60px',
                  '--top-hat-height': '38px',
                  fontFamily: 'Inter,sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  textRendering: 'optimizeLegibility',
                  listStyle: 'none',
                  boxSizing: 'border-box',
                  background: 'rgb(239, 242, 251)',
                  borderRadius: '8px',
                  color: 'rgb(77, 91, 124)',
                  cursor: 'pointer',
                  display: 'inline-block',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 1.71429,
                  margin: '4px 8px 4px 0px',
                  padding: '0px 8px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'background 0.15s linear 0s, color 0.15s linear 0s',
                  marginLeft: '0px'
                }}
              >
                Node.js
              </a>
            </li>
          </ul>
        </div>

        <img
          src="/images/bg.webp"
          alt="lorem"
          title="lorem"
          style={{
            borderStyle: 'none',
            borderRadius: '24px',
            display: 'block',
            margin: '40px 0px',
            width: '100%'
          }}
        />

        <div
          style={{
            fontSize: '16px',
            position: 'relative',
            zIndex: 0
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit consequuntur, dicta, totam nulla excepturi quaerat quos
          vel repellendus, voluptate exercitationem similique obcaecati. Impedit iusto at voluptas asperiores explicabo. Quisquam
          inventore odit mollitia, totam eum ratione vitae dolores aliquam iste placeat id, blanditiis dignissimos corrupti error!
          Id sit quas nobis voluptatibus eos aperiam rerum dolor commodi illo error cupiditate vel, molestias earum
          necessitatibus, omnis dolorem corporis velit nam officia veritatis. Corrupti laboriosam aperiam animi repellat vero enim
          obcaecati cupiditate perspiciatis exercitationem hic, deserunt repudiandae itaque quisquam, voluptas deleniti vitae
          provident saepe maxime at, esse quam! Molestias ducimus veritatis magni nisi dolorum?
        </div>
      </div>
    </>
  )
}
