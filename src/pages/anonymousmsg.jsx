import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Index(props) {
  const [msg, setmsg] = useState('')
  const [isLoading, setisLoading] = useState(false)

  function sendMsg() {
    setisLoading(true)
    axios
      .post('/api/anonymousmsg', { msg })
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
    <>
      <Head>
        <title>{'Profile'}</title>
        {/* <meta name="description" content={`${data.name},${data.githubUsername} website, ${data.work},  ${data.address}`} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/jpg" href="/images/linux.ico" />
      </Head>

      <div
        style={{
          width: '100%',
          height: '100%',
          // background: 'white',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'inline-flex'
        }}
      >
        <Image
          src="/images/loading-gif.gif"
          width={70}
          height={70}
          alt="Loading..."
          style={{ position: 'absolute', margin: 'auto', top: 0, display: isLoading ? 'block' : 'none' }}
        />

        <div
          style={{
            alignSelf: 'stretch',
            flex: '1 1 0',
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 195,
            paddingBottom: 195,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 10,
            display: 'inline-flex'
          }}
        >
          <div style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
            <div
              style={{
                paddingLeft: 9,
                paddingRight: 9,
                paddingTop: 19,
                paddingBottom: 19,
                background: '#0A614C',
                borderRadius: 20,
                overflow: 'hidden',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                display: 'flex'
              }}
            >
              <div
                style={{
                  paddingLeft: 41,
                  paddingRight: 41,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  display: 'inline-flex'
                }}
              >
                <div
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 20,
                    fontFamily: 'Ubuntu',
                    fontWeight: '700',
                    wordWrap: 'break-word'
                  }}
                >
                  Send me anonymous
                  <br />
                  message
                </div>
              </div>
              <div
                style={{
                  padding: 20,
                  background: 'rgba(255, 255, 255, 0.80)',
                  borderRadius: 20,
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  display: 'inline-flex'
                }}
              >
                <textarea
                  placeholder="Write a message here"
                  name="msg"
                  id="msg"
                  cols="30"
                  style={{
                    width: 265,
                    color: 'black',
                    fontSize: 20,
                    fontFamily: 'Ubuntu',
                    fontWeight: '700',
                    wordWrap: 'break-word',
                    outline: 'none',
                    backgroundColor: 'transparent'
                  }}
                  onChange={(event) => {
                    const textarea = event.target
                    textarea.style.height = 'auto'
                    textarea.style.height = `${textarea.scrollHeight}px`
                    // console.log(textarea.value)
                    setmsg(textarea.value)
                  }}
                  value={msg}
                ></textarea>
              </div>
            </div>
            <div
              style={{
                alignSelf: 'stretch',
                paddingLeft: 50,
                paddingRight: 50,
                paddingTop: 12,
                paddingBottom: 12,
                background: '#0016DC',
                borderRadius: 20,
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                display: 'inline-flex',
                cursor: 'pointer'
              }}
              onClick={sendMsg}
            >
              <button
                type="button"
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Ubuntu',
                  fontWeight: '700',
                  wordWrap: 'break-word'
                }}
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
