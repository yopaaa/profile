import { useState, useEffect } from 'react'
import style from '../../styles/List2.module.css'
import axios from 'axios'

const Loading = () => {
  return (
    <>
      <div className={style.card + ' animate-pulse'}>
        <div className={style.cardHeader + ' animate-pulse'} style={{ padding: 50, backgroundColor: 'gray' }}></div>

        <div className={style.cardBody + ' animate-pulse'} style={{ padding: 30, margin: 10, backgroundColor: 'gray' }}></div>
      </div>
      <div className={style.card + ' animate-pulse'}>
        <div className={style.cardHeader + ' animate-pulse'} style={{ padding: 50, backgroundColor: 'gray' }}></div>

        <div className={style.cardBody + ' animate-pulse'} style={{ padding: 30, margin: 10, backgroundColor: 'gray' }}></div>
      </div>
      <div className={style.card + ' animate-pulse'}>
        <div className={style.cardHeader + ' animate-pulse'} style={{ padding: 50, backgroundColor: 'gray' }}></div>

        <div className={style.cardBody + ' animate-pulse'} style={{ padding: 30, margin: 10, backgroundColor: 'gray' }}></div>
      </div>
    </>
  )
}
const List = ({ path, ObjKey, altText = '' }) => {
  const [content, setcontent] = useState(<Loading />)
  let datas = []

  useEffect(() => {
    axios
      .get(path)
      .then((val) => {
        // console.log(val)
        datas = val.data.payload[ObjKey].reverse()
        if (datas.length < 1) {
          setcontent(<div style={{ fontStyle: 'italic', margin: 'auto' }}>{altText}</div>)
        } else {
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
        }
      })
      .catch((e) => {
        setcontent(
          <div className={style.card}>
            <div className={style.cardHeader}></div>

            <div className={style.cardBody} style={{ alignItems: 'center', padding: 30 }}>
              <p style={{ color: 'red' }}>{e.message}</p>
            </div>
          </div>
        )
      })
  }, [path])
  return <div className={style.containerCertificate}>{content}</div>
}

export default List
