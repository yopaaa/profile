import Head from 'next/head'
import Home from '../components/Home'
import data from '../js/data'
import parser from 'ua-parser-js'
import axios from 'axios'
import { hasCookie, setCookie } from 'cookies-next'

export default function Index({ visitorCount }) {
  const profile = '/images/profile.webp'

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
            <Home />
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
        <p>visitor count from april 29, 2023 : {visitorCount}</p>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const API = axios.create({ headers: { 'x-api-key': process.env.API_KEY } })
  const reqRes = {
    req: context.req,
    res: context.res
  }
  const visitor = parser(context.req.headers['user-agent'])
  const isNewVisitor = !hasCookie('isVisitor', { ...reqRes })
  const backendPath = process.env.BACKEND_HOST
  const ipAddress = context.req.headers['x-forwarded-for'] || context.req.connection.remoteAddress
  let visitorCount

  // get more info from ip address with ipapi api
  try {
    const extractIp = await axios.get(`https://ipapi.co/${ipAddress}/json/`)
    visitor.visitor = extractIp.data
  } catch (error) {
    console.log(error.message)
    visitor.visitor = ipAddress
  }

  const lang = visitor.visitor && visitor.visitor.languages ? visitor.visitor.languages : 'en'

  if (!context.query.lang) {
    return {
      redirect: {
        destination: '/?lang=' + lang.split(',')[0],
        permanent: false
      }
    }
  }

  if (isNewVisitor) {
    setCookie('isVisitor', 'true', {
      httpOnly: true,
      maxAge: 60 * 60,
      ...reqRes
    })
    console.log('new visitor found : ' + ipAddress)

    // send new visitor data to backend
    try {
      API.post(`${backendPath}/visitors/${data.githubUsername}/new`, visitor)
    } catch (error) {
      console.log(error.message)
    }
  }

  // get visitor count from backend
  try {
    const getVisitorCount = await API.get(`${backendPath}/visitors/${data.githubUsername}/count`, {})
    visitorCount = getVisitorCount.data.payload.count
  } catch (error) {
    visitorCount = 'Failed to get data'
    console.log(error.message)
  }

  console.log(`Client ${ipAddress}, visitor count : ${visitorCount}`)

  return {
    props: {
      visitorCount
    }
  }
}
