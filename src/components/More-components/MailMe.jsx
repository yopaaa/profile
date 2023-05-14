import { useState } from 'react'
import data from '../../js/data.js'
import style from '../../styles/MailMe.module.css'

const MailMe = () => {
  const [mailBody, setMailBody] = useState('')
  const [name, setName] = useState('Anonymous')

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
        href={`mailto:${data.email}?subject=${'message from ' + name + ' - profile.yopaaa.site'}&body=${mailBody}`}
        target="_blank"
      >
        Send an Email
      </a>
    </div>
  )
}

export default MailMe
