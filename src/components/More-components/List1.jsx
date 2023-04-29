import { useState, useEffect } from 'react'
// import data from '../../data/data.js'

const List = ({ data }) => {
  const [list, setList] = useState()
  const datas = [...data].reverse()

  useEffect(() => {
    setList(
      datas.map((val) => {
        return (
          <div className="more-Link-container" key={val.name}>
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
