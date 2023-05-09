import Head from 'next/head'
import data from '../js/data'

export default function Index() {
  // const profile = '/images/profile.webp'

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

      <div
        className=""
        style={{
          background: 'white',
          padding: '10px',
          margin: '10px',
          borderRadius: '10px',
          opacity: 0.8
        }}
      >
        <h1 style={{ textAlign: 'center', fontSize: 30, textTransform: 'uppercase' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eius?
        </h1>
        <hr />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero earum dolorem et repudiandae, ipsa pariatur
          quasi aspernatur dolores repellat soluta similique non? Accusantium, sit reiciendis aut sunt corporis dolor? Et quas
          quam, debitis maiores temporibus quae laboriosam qui deserunt accusantium nulla ullam quaerat, sit animi facilis neque
          unde sapiente!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero earum dolorem et repudiandae, ipsa pariatur
          quasi aspernatur dolores repellat soluta similique non? Accusantium, sit reiciendis aut sunt corporis dolor? Et quas
          quam, debitis maiores temporibus quae laboriosam qui deserunt accusantium nulla ullam quaerat, sit animi facilis neque
          unde sapiente!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero earum dolorem et repudiandae, ipsa pariatur
          quasi aspernatur dolores repellat soluta similique non? Accusantium, sit reiciendis aut sunt corporis dolor? Et quas
          quam, debitis maiores temporibus quae laboriosam qui deserunt accusantium nulla ullam quaerat, sit animi facilis neque
          unde sapiente!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero earum dolorem et repudiandae, ipsa pariatur
          quasi aspernatur dolores repellat soluta similique non? Accusantium, sit reiciendis aut sunt corporis dolor? Et quas
          quam, debitis maiores temporibus quae laboriosam qui deserunt accusantium nulla ullam quaerat, sit animi facilis neque
          unde sapiente!
        </p>
<<<<<<< HEAD

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero earum dolorem et repudiandae, ipsa pariatur
          quasi aspernatur dolores repellat soluta similique non? Accusantium, sit reiciendis aut sunt corporis dolor? Et quas
          quam, debitis maiores temporibus quae laboriosam qui deserunt accusantium nulla ullam quaerat, sit animi facilis neque
          unde sapiente!
        </p>
=======
>>>>>>> parent of b0ff239 (Revert "update data.js")
      </div>
    </>
  )
}
