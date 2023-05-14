import Head from 'next/head'
import More from '../components/More'
import data from '../js/data'

export default function Index() {
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
          <div className="p-4 md:p-12 md:pb-8 text-center lg:text-left">
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${profile})` }}
              title="profile"
            />

            <More />
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img alt={data.name} src={profile} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}
  }
}
