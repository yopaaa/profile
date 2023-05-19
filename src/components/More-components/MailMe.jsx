import { useEffect, useState } from 'react'
import style from '../../styles/MailMe.module.css'
import axios from 'axios'

const MailMe = () => {
  const [mailBody, setMailBody] = useState('')
  const [mailto, setmailto] = useState('')
  const [name, setName] = useState('Anonymous')

  useEffect(() => {
    axios
      .get('/api/data?email=1')
      .then((val) => {
        setmailto(val.data.payload.email)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <div className={style.mailMeContainer}>
      <div className={style.mailMeName}>
        <p>Name</p>
        <input type="text" onChange={(ev) => setName(ev.target.value)} placeholder="Name" />
      </div>
      <br />

      <div className={style.mailMeTextArea}>
        <textarea name="" id="" onChange={(ev) => setMailBody(ev.target.value)} style={{ maxHeight: 200 }}></textarea>
      </div>

      <br />
      <a
        rel="noreferrer"
        href={`mailto:${mailto}?subject=${'message from ' + name + ' - profile.yopaaa.site'}&body=${mailBody}`}
        target="_blank"
      >
        Send an Email
      </a>
    </div>
  )
}

export default MailMe
