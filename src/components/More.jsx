import { useState, useEffect } from 'react'
import Repository from './More-components/Repository'
import MailMe from './More-components/MailMe'
import { useRouter } from 'next/router'
import data from '../js/data'
import List1 from './More-components/List1'
import List2 from './More-components/List2'

const Home = () => {
  const contentList = [
    { name: 'Repository', value: <Repository /> },
    { name: 'Link', value: <List1 data={data.more.link} text={'link'} /> },
    {
      name: 'Certificate',
      value: <List2 data={data.more.Certificate} altText={<div style={{ fontStyle: 'italic' }}>No Certificate now :)</div>} />
    },
    { name: 'Tools and Skils', value: <List1 data={data.more.skils} text={'skils'} /> },
    {
      name: 'Experience',
      value: <List2 data={data.more.experience} altText={<div style={{ fontStyle: 'italic' }}>No work experience now :)</div>} />
    },
    {
      name: 'Blog',
      value: <List2 data={data.more.blog} altText={<div style={{ fontStyle: 'italic' }}>No Blog now :)</div>} />
    },
    { name: 'Mail Me', value: <MailMe /> }
  ]
  const [repoContentNavigation, setrepoContentNavigation] = useState()
  const [content, setcontent] = useState()
  const router = useRouter()
  const page = router.query.page || 'Repository'
  const isExistPage = !!contentList.find((value) => value.name === page)

  function getNav(curretPage = 'Repository') {
    setrepoContentNavigation(
      <div className="repo-content-navigation">
        <p
          onClick={() => {
            router.push('/', '/', {
              shallow: true
            })
          }}
          className="backBtn"
        >
          Back
        </p>

        {contentList.map((val) => {
          const name = val.name
          return (
            <p
              onClick={(ev) => {
                getNav(name)
                getContent(name)
                router.push(`?page=${name}`)
              }}
              className={curretPage === name ? ' curretPage' : ''}
              style={{ cursor: 'pointer' }}
              key={name}
            >
              {name}
            </p>
          )
        })}
      </div>
    )
  }

  function getContent(name) {
    const Result = contentList.find((value) => value.name === name).value
    setcontent(Result)
  }

  useEffect(() => {
    if (isExistPage) {
      getNav(page)
      getContent(page)
    } else {
      getNav('Repository')
      getContent('Repository')
      router.push('/more?page=Repository')
    }
  }, [])

  return (
    <>
      {repoContentNavigation}
      <div className="content">{content}</div>
    </>
  )
}

export default Home
