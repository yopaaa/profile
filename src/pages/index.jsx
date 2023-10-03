import Head from 'next/head'
import Home from '../components/Home'
import { hasCookie, setCookie, getCookie } from 'cookies-next'
import getData from '../js/getData'
import getVisitor from '../js/getVisitor'
import postVisitors from '../js/postVisitors'
import { getLink } from '../js/getLinks'

export default function Index(props) {
  const profile = '/images/profile.webp'
  const { visitorCount, data, isError, errMsg } = props

  return (
    <>
      <Head>
        <title>{'Profile'}</title>
        <meta name="description" content={`${data.name},${data.githubUsername} website, ${data.work},  ${data.address}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/jpg" href="/images/linux.ico" />
      </Head>

      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${profile})` }}
              title="profile"
            />
            {isError ? errMsg : <Home data={data} />}
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img alt={data.name} src={profile} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 0,
          color: 'white',
          fontSize: '13px'
        }}
      >
        <p>
          visitor count from april 29, 2023 : {visitorCount} {}
        </p>
      </div>
    </>
  )
}

export async function getServerSideProps({ req, res, query }) {
  const userAgent = req.headers['user-agent']
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  const isNewVisitor = !hasCookie('isVisitor', { req, res })
  let visitorCount = 'Failed to get data'
  let lang = 'en'
  let data = {}

  try {
    const getDatas = await getData([])
    const getLinks = await getLink([])
    data = { ...getDatas.payload, ...getLinks.payload }
    // console.log(data)
    if (isNewVisitor) {
      // set is visitor
      setCookie('isVisitor', 'true', {
        httpOnly: true,
        maxAge: 60 * 60,
        req,
        res
      })
      console.log('new visitor found ip : ' + ipAddress)

      // send new visitor data to backend
      const x = await postVisitors({ userAgent, ipAddress })
      visitorCount = x.count
      lang = x.lang
      setCookie('lang', lang, { maxAge: 60 * 60, req, res })
    } else {
      // get visitors count
      const x = await getVisitor()
      visitorCount = x.count
    }

    if (!query.lang) {
      if (hasCookie('lang', { req, res })) lang = getCookie('lang', { req, res })
      return {
        redirect: {
          destination: '/?lang=' + lang,
          permanent: false
        }
      }
    }

    console.log(`Client ${ipAddress}, visitor count : ${visitorCount}`)

    return {
      props: {
        isError: false,
        visitorCount,
        data
      }
    }
  } catch (error) {
    console.log(error.message)
    return {
      props: {
        isError: true,
        errMsg: error.message,
        visitorCount,
        data: {}
      }
    }
  }
}
