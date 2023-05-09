import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import data from '../js/data'

const Home = () => {
  const contentList = data.morePage
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
      {repoContentNavigation}
      <div className="content">{content}</div>
    </>
  )
}

export default Home
