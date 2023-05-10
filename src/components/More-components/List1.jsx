import { useState, useEffect } from 'react'
import style from '../../styles/List1.module.css'

const List = ({ data }) => {
  const [list, setList] = useState()
  const datas = [...data].reverse()

  useEffect(() => {
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
  }, [data])
  return <div>{list}</div>
}

export default List
