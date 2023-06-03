import { useState, useEffect } from 'react'
import style from '../../styles/List1.module.css'
import axios from 'axios'

const Loading = () => {
  return (
    <>
      <div className={style.LinkContainer + ' animate-pulse'} style={{ paddingBottom: 50 }}>
        <span className="name animate-pulse"></span>
      </div>
      <div className={style.LinkContainer + ' animate-pulse'} style={{ paddingBottom: 50 }}>
        <span className="name animate-pulse"></span>
      </div>
      <div className={style.LinkContainer + ' animate-pulse'} style={{ paddingBottom: 50 }}>
        <span className="name animate-pulse"></span>
      </div>
      <div className={style.LinkContainer + ' animate-pulse'} style={{ paddingBottom: 50 }}>
        <span className="name animate-pulse"></span>
      </div>
    </>
  )
}

const List = ({ path, ObjKey }) => {
  const [list, setList] = useState(<Loading />)
  let datas = []

  useEffect(() => {
    axios
      .get(path)
      .then((val) => {
        datas = val.data.payload[ObjKey].reverse()
        // console.log(datas)
        setList(
          datas.map((val) => {
            return (
              <div className={style.LinkContainer} key={val.name}>
                <span className="name" title={val.name}>
                  <a href={val.link} target="_blank" rel="noreferrer">
                    {val.name}
                  </a>
                </span>
              </div>
            )
          })
        )
      })
      .catch((e) => {
        setList(
          <div className={style.LinkContainer}>
            <span className="name">
              <p style={{ color: 'red' }}>{e.message}</p>
            </span>
          </div>
        )
      })
  }, [path])
  return <div>{list}</div>
}

export default List
