import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import style from '../../styles/Repository.module.css'

const Repository = () => {
  const [repoList, setRepoList] = useState(
    <div className={style.repositoryContainer + ' animate-pulse'}>
      <span
        className={style.name}
        style={{ height: 25, backgroundColor: 'gray', borderRadius: 10, width: '50%', margin: 5 }}
      ></span>

      <p style={{ height: 50, backgroundColor: 'gray', borderRadius: 10, margin: 5 }}></p>
      <div className={style.repositoryTime}>
        <p style={{ height: 15, backgroundColor: 'gray', borderRadius: 10, width: '50%', margin: 5 }}></p>
        <p style={{ height: 15, backgroundColor: 'gray', borderRadius: 10, width: '50%', margin: 5 }}></p>
        <p style={{ height: 15, backgroundColor: 'gray', borderRadius: 10, width: '50%', margin: 5 }}></p>
      </div>
    </div>
  )

  async function getRepo() {
    const datas = await axios.get('https://api.github.com/users/yopaaa/repos?sort=pushed')
    setRepoList(
      datas.data.map((val) => {
        // console.log(val);
        return (
          <div className={style.repositoryContainer} key={val.full_name}>
            <span className={style.name} title="name">
              <a href={val.html_url} target="_blank" rel="noreferrer">
                {val.full_name}
              </a>
            </span>
            {/* <p>{val.html_url}</p> */}
            <p style={{ fontSize: '14px' }} title="description">
              {val.description}
            </p>
            <div className={style.repositoryTime}>
              <p title="created at">created at {moment(val.created_at).startOf('second').fromNow()}</p>

              <p title="updated at">updated at {moment(val.updated_at).startOf('second').fromNow()}</p>

              <p title="pushed at">pushed at {moment(val.pushed_at).startOf('second').fromNow()}</p>
            </div>
          </div>
        )
      })
    )
  }

  useEffect(() => {
    getRepo()
  }, [])
  return repoList
}

export default Repository
