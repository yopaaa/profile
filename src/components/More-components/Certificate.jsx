import { useState, useEffect } from 'react'
import data from '../../data/data.js'

const Certificate = () => {
  const [content, setcontent] = useState()

  function getcontent() {
    setcontent(
      data.Certificate.map((value) => {
        return (
          <div className="card" key={value.name + value.competition}>
            <div className="card-header">
              <img src={value.img} alt="rover" />
            </div>
            <div className="card-body">
              <h4 title="view certificates" style={{ fontWeight: 'bold' }}>
                {value.name} - {value.competition}
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
  }

  useEffect(() => {
    getcontent()
  }, [])
  return <div className="container-certificate">{content}</div>
}

export default Certificate
