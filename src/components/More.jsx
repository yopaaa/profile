import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import style from '../styles/More.module.css'
import Repository from './More-components/Repository'
import List1 from './More-components/List1'
import List2 from './More-components/List2'
import MailMe from './More-components/MailMe'

const Home = ({ data }) => {
  const contentList = [
    {
      name: 'Repository',
      value: function () {
        return <Repository username={data.githubUsername} />
      }
    },
    {
      name: 'Link',
      value: function () {
        return <List1 path={'/api/Link'} ObjKey={'Link'} />
      }
    },
    {
      name: 'Certificate',
      value: function () {
        return (
          <List2
            path={'/api/data?Certificate=1'}
            ObjKey={'Certificate'}
            altText={<div style={{ fontStyle: 'italic' }}>No Certificate now :)</div>}
          />
        )
      }
    },
    {
      name: 'Tools and Skils',
      value: function () {
        return <List1 path={'/api/data?Skills=1'} ObjKey={'Skills'} />
      }
    },
    {
      name: 'Experience',
      value: function () {
        return (
          <List2
            path={'/api/data?Experience=1'}
            ObjKey={'Experience'}
            altText={<div style={{ fontStyle: 'italic' }}>No work experience now :)</div>}
          />
        )
      }
    },
    {
      name: 'Blog',
      value: function () {
        return (
          <List2 path={'/api/data?Blog=1'} ObjKey={'Blog'} altText={<div style={{ fontStyle: 'italic' }}>No Blog now :)</div>} />
        )
      }
    },
    {
      name: 'Mail Me',
      value: function () {
        return <MailMe />
      }
    }
  ]

  const [ContentNavigation, setContentNavigation] = useState()
  const [content, setcontent] = useState()
  const router = useRouter()
  const page = router.query.page || 'Repository'
  const isExistPage = !!contentList.find((value) => value.name === page)

  function getNav(curretPage = 'Repository') {
    setContentNavigation(
      <div className={style.ContentNavigation}>
        <Link href={'..'} className={style.backBtn}>
          Back
        </Link>

        {contentList.map((val) => {
          const name = val.name
          return (
            <p
              onClick={(ev) => {
                getNav(name)
                getContent(name)
                router.push(`?page=${name}`)
              }}
              className={curretPage === name ? style.curretPage : ''}
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
    const Result = contentList.find((value) => value.name === name).value()
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
      {ContentNavigation}
      <div className={style.content}>{content}</div>
    </>
  )
}

export default Home
