import { useState, useEffect } from 'react'

const List = ({ data, altText = '' }) => {
  const [content, setcontent] = useState()
  const datas = [...data].reverse()

  useEffect(() => {
    setcontent(
      datas.map((value) => {
        return (
          <div className="card" key={value.name + value.title}>
            <div className="card-header">
              <img src={value.img} alt={value.title} />
            </div>

            <div className="card-body">
              <h4 title="view certificates" style={{ fontWeight: 'bold' }}>
                {value.name} - {value.title}
              </h4>

              <p style={{ fontSize: '14px' }}>{value.des}</p>

              <a href={value.link} style={{ color: 'blue', fontSize: '12px' }} target="_blank" rel="noreferrer">
                view
              </a>

              <p style={{ fontSize: '12px' }}>{value.date}</p>
            </div>
          </div>
        )
      })
    )
    if (datas.length < 1) setcontent(<div style={{ fontStyle: 'italic' }}>{altText}</div>)
  }, [data])
  return <div className="container-certificate">{content}</div>
}

export default List
