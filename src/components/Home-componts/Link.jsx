import { useEffect, useState } from 'react'
import data from '../../js/data.js'

const Link = () => {
  const [list, setList] = useState()

  useEffect(() => {
    setList(
      data.link.slice(0, 5).map((val) => {
        return (
          <a className="link" href={val.link} key={val.name} target="_blank" rel="noreferrer">
            <span className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" xmlns="http://www.w3.org/2000/svg">
              <img width="25px" height="25px" src={val.img} alt="logo" title={val.name} />
            </span>
          </a>
        )
      })
    )
  }, [])
  return (
    <div>
      <div
        className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between"
        style={{
          display: 'flex',
          gap: 20,
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignContent: 'center',
          overflow: 'scroll'
        }}
      >
        {list}
      </div>
    </div>
  )
}

export default Link
