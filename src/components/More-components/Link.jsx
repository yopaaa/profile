import { useState, useEffect } from 'react'
import data from '../../data/data.js'

const Link = () => {
  const [list, setList] = useState()

  useEffect(() => {
    const datas = data.link.reverse()
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
  }, [])
  return <div>{list}</div>
}

export default Link
