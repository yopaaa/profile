import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import data from '../js/data'
import style from '../styles/More.module.css'

const Home = () => {
  const contentList = data.morePage
  const [ContentNavigation, setContentNavigation] = useState()
  const [content, setcontent] = useState()
  const router = useRouter()
  const page = router.query.page || 'Repository'
  const isExistPage = !!contentList.find((value) => value.name === page)

  function getNav(curretPage = 'Repository') {
    setContentNavigation(
      <div className={style.ContentNavigation}>
        <p
          onClick={() => {
            router.push('/', '/', {
              // shallow: true
            })
          }}
          className={style.backBtn}
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
