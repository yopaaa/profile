import { useState } from 'react'
import style from '../../styles/MailMe.module.css'
import axios from 'axios'
import Image from 'next/image'

const MailMe = () => {
  const [name, setName] = useState('Anonymous')

  const [msg, setmsg] = useState('')
  const [isLoading, setisLoading] = useState(false)

  function sendMsg() {
    setisLoading(true)
    const message = `message from ${name}, ${msg}`
    console.log(message)
    axios
      .post('/api/anonymousmsg', { msg: message })
      .then((val) => {
        alert('thanks for a message')
      })
      .catch((er) => {
        alert(er.message)
      })
      .finally(() => {
        setisLoading(false)
        setmsg('')
      })
  }

  return (
    <div className={style.mailMeContainer}>
      <Image
        src="/images/loading-gif.gif"
        width={70}
        height={70}
        alt="Loading..."
        style={{ position: 'absolute', margin: 'auto', top: 0, display: isLoading ? 'block' : 'none' }}
      />

      <div className={style.mailMeName}>
        <p>Name</p>
        <input type="text" onChange={(ev) => setName(ev.target.value)} placeholder="Name" value={name} />
      </div>
      <br />

      <div className={style.mailMeTextArea}>
        <textarea name="" id="" onChange={(ev) => setmsg(ev.target.value)} style={{ maxHeight: 200 }} value={msg}></textarea>
      </div>

      <br />
      <button onClick={sendMsg}>Send Message</button>
    </div>
  )
}

export default MailMe
