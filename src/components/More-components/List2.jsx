import { useState, useEffect } from 'react'
import style from '../../styles/List2.module.css'

const List = ({ data, altText = '' }) => {
  const [content, setcontent] = useState()
  const datas = [...data].reverse()

  useEffect(() => {
    setcontent(
      datas.map((value) => {
        return (
          <div className={style.card} key={value.name + value.title}>
            <div className={style.cardHeader}>
              <img src={value.img} alt={value.title} />
            </div>

            <div className={style.cardBody}>
              <h4 title={'view ' + value.name} style={{ fontWeight: 'bold' }}>
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
  return <div className={style.containerCertificate}>{content}</div>
}

export default List
