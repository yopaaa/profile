import Head from 'next/head'
import data from '../js/data'
import styles from '../styles/Blog.module.css'

export default function Index() {
  return (
    <>
      <Head>
        <title>{'Profile'}</title>
        <meta
          name="description"
          content={`${data.name},${data.githubUsername} website, ${data.work},  ${data.address}, ${data.des}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/jpg" href="/images/linux.ico" />
      </Head>

      <div className={styles.container}>
        <h4 className={styles.blogType}>{'// Tutorial //'}</h4>

        <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eius?</h1>

        <div className={styles.infoContainer}>
          <span className={styles.authorImage}>
            <img src="/images/profile.webp" width="50" height="50" alt="author"></img>
          </span>
          <div>yopaaa</div>
          <div>.</div>
          <div>Published on May 13, 2016</div>
          <div>.</div>
          <div>Updated on October 27, 2021</div>
        </div>

        <hr style={{ borderColor: 'black', marginTop: 20, marginBottom: 20 }} />

        <div className={styles.tagContainer}>
          <a className={styles.tagStyle}>#Node.js</a>
          <a className={styles.tagStyle}>#CSS</a>
          <a className={styles.tagStyle}>#Linux</a>
        </div>

        <div className={styles.headerImage}>
          <img src="/images/bg.webp" alt="lorem" title="lorem" />
        </div>

        <div
          style={{
            fontSize: '16px',
            position: 'relative',
            zIndex: 0
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit consequuntur, dicta, totam nulla excepturi quaerat quos
          vel repellendus, voluptate exercitationem similique obcaecati. Impedit iusto at voluptas asperiores explicabo. Quisquam
          inventore odit mollitia, totam eum ratione vitae dolores aliquam iste placeat id, blanditiis dignissimos corrupti error!
          Id sit quas nobis voluptatibus eos aperiam rerum dolor commodi illo error cupiditate vel, molestias earum
          necessitatibus, omnis dolorem corporis velit nam officia veritatis. Corrupti laboriosam aperiam animi repellat vero enim
          obcaecati cupiditate perspiciatis exercitationem hic, deserunt repudiandae itaque quisquam, voluptas deleniti vitae
          provident saepe maxime at, esse quam! Molestias ducimus veritatis magni nisi dolorum?
        </div>
      </div>
    </>
  )
}
