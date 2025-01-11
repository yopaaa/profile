import Head from 'next/head'
import styles from '../styles/Blog.module.css'
import Code from '../components/Code'

export default function Index() {
  return (
    <>
      <Head>
        <title>{'Profile'}</title>
        {/* <meta
          name="description"
          content={`${data.name},${data.githubUsername} website, ${data.work},  ${data.address}, ${data.des}`}
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/jpg" href="/images/linux.ico" />
      </Head>

      <div className={styles.container}>
        <h4 className={styles.blogType}>{'// informatif //'}</h4>

        <h1 className={styles.title}>Melintasi Cakrawala: Menggali Potensi Fiber Optik dalam Transformasi Digital</h1>

        <div className={styles.infoContainer}>
          <span className={styles.authorImage}>
            <img src="/images/profile.webp" width="50" height="50" alt="author"></img>
          </span>
          <div>yopaaa</div>
          <div>.</div>
          <div>Published on May 21, 2023</div>
          <div>.</div>
          <div>Updated on May 21, 2023</div>
        </div>

        <hr style={{ borderColor: 'black', marginTop: 20, marginBottom: 20 }} />

        <div className={styles.tagContainer}>
          <a className={styles.tagStyle}>#FiberOptik</a>
          <a className={styles.tagStyle}>#TransformasiDigital</a>
          <a className={styles.tagStyle}>#JaringanSupercepat</a>
          <a className={styles.tagStyle}>#TeknologiSeratCahaya</a>
        </div>

        <div className={styles.headerImage}>
          <img src="https://file.sulselprov.go.id/upload/post/1513603163.jpg" alt="lorem" title="lorem" />
        </div>

        <div
          style={{
            fontSize: '16px',
            position: 'relative',
            zIndex: 0
          }}
        >
          <p style={{ marginBottom: 20 }}>
            Dalam era digital yang terus berkembang dengan pesat, kebutuhan akan konektivitas yang cepat, handal, dan skalabel
            semakin mendesak. Inilah dimana teknologi Fiber Optik muncul sebagai tulang punggung infrastruktur digital modern.
            Dengan kemampuannya untuk mengirimkan data melalui serat kaca dengan kecepatan cahaya, Fiber Optik telah melintasi
            batasan-batasan komunikasi sebelumnya dan membuka jalan menuju transformasi digital yang revolusioner. Artikel ini
            akan menggali potensi luar biasa yang dimiliki oleh Fiber Optik dan bagaimana ia mengubah cara kita berkomunikasi dan
            terhubung dengan dunia.
          </p>

          <h1 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Apa itu fiber optic?</h1>

          <p style={{ marginBottom: 20 }}>
            Fiber optik adalah sebuah teknologi yang menggunakan serat kaca atau plastik yang sangat tipis untuk mengirimkan data
            melalui cahaya. Prinsip dasar dari fiber optik adalah memanfaatkan hukum fisika pemantulan total internal untuk
            mengarahkan dan mempertahankan cahaya di dalam serat optik, sehingga data dapat dikirim dengan kecepatan tinggi dan
            jarak yang jauh.
          </p>

          <h1 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Apa saja bagian fiber optic?</h1>

          <p style={{ marginBottom: 20 }}>
            Serat optik terdiri dari inti yang sangat tipis dan transparan yang terbuat dari bahan kaca atau plastik dengan indeks
            bias yang tinggi. Inti ini dikelilingi oleh lapisan pelindung yang disebut kulit atau cladding yang memiliki indeks
            bias yang lebih rendah. Perbedaan indeks bias antara inti dan kulit ini memungkinkan cahaya untuk dipantulkan kembali
            ke dalam inti saat mencapai batas antara keduanya.
          </p>

          <h1 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Bagaimana fiber optic bekerja?</h1>

          <p style={{ marginBottom: 20 }}>
            Proses pengiriman data melalui fiber optik dimulai dengan mengirimkan sinyal listrik dalam bentuk pulsa cahaya melalui
            pengirim optik. Sinyal cahaya ini kemudian masuk ke serat optik dan bergerak di sepanjang serat melalui pemantulan
            total internal yang terjadi pada permukaan antara inti dan kulit. Sinyal cahaya ini kemudian diterima oleh penerima
            optik di ujung lain serat optik, diubah kembali menjadi sinyal listrik, dan diterjemahkan menjadi data yang dapat
            digunakan.
          </p>

          <h1 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Apa keuntungan menggunakan fiber optic?</h1>

          <p style={{ marginBottom: 20 }}>
            Keuntungan utama dari fiber optik adalah kecepatan dan kapasitasnya yang tinggi. Karena menggunakan cahaya sebagai
            medium pengiriman data, fiber optik mampu mentransfer informasi dengan kecepatan yang jauh lebih tinggi dibandingkan
            dengan teknologi kabel tembaga konvensional. Selain itu, fiber optik juga memiliki jangkauan yang lebih panjang,
            mengalami sedikit atau tanpa gangguan elektromagnetik, dan tidak rentan terhadap interferensi dari sumber-sumber
            eksternal.
          </p>
          <p style={{ marginBottom: 20 }}>
            Fiber optik telah menjadi tulang punggung infrastruktur telekomunikasi modern, digunakan dalam jaringan telepon,
            internet, televisi, dan berbagai aplikasi komunikasi data lainnya. Dengan terus berkembangnya teknologi, fiber optik
            terus mengalami inovasi dan menjadi lebih efisien serta lebih fleksibel, membuka peluang baru dalam bidang
            telekomunikasi, kesehatan, transportasi, dan industri lainnya.
          </p>
          <p style={{ marginBottom: 20 }}>
            Fiber optik telah membuktikan dirinya sebagai teknologi yang mengesankan dalam transformasi digital. Dengan
            kemampuannya untuk mentransfer data dengan kecepatan tinggi, jangkauan yang luas, dan keandalan yang tinggi, fiber
            optik telah menjadi tulang punggung infrastruktur telekomunikasi modern.
          </p>
          <p style={{ marginBottom: 20 }}>
            Keberhasilan fiber optik dalam memenuhi kebutuhan konektivitas yang semakin meningkat telah membawa dampak besar dalam
            berbagai sektor. Dalam industri telekomunikasi, fiber optik telah memungkinkan kita untuk memiliki komunikasi suara
            dan data yang lebih baik, menghubungkan orang-orang di seluruh dunia. Di bidang kesehatan, fiber optik telah membuka
            pintu bagi layanan telemedicine yang dapat menghubungkan pasien dengan tenaga medis jarak jauh. Sedangkan dalam
            industri dan manufaktur, fiber optik telah mendorong efisiensi dan pengendalian proses yang lebih baik.
          </p>
          <p style={{ marginBottom: 20 }}>
            Namun, potensi fiber optik masih belum terungkap sepenuhnya. Masih ada tantangan yang harus dihadapi, seperti biaya
            infrastruktur yang tinggi dan kesenjangan digital yang perlu diatasi. Namun, dengan inovasi terus-menerus dan
            kerjasama antara industri, pemerintah, dan masyarakat, kita dapat mengatasi hambatan tersebut.
          </p>
          <p style={{ marginBottom: 20 }}>
            Dalam masa depan, fiber optik memiliki potensi yang lebih besar. Teknologi fiber optik terus berkembang, dengan
            peningkatan kapasitas, efisiensi, dan kemampuan untuk beradaptasi dengan kebutuhan yang terus berubah. Fiber optik
            akan memainkan peran penting dalam membangun dunia yang lebih terhubung, mengaktifkan revolusi digital, dan membuka
            peluang baru bagi inovasi dan kemajuan.
          </p>
          <p style={{ marginBottom: 20 }}>
            Dengan melintasi cakrawala, fiber optik telah membawa kita ke era transformasi digital yang menakjubkan. Dalam
            perjalanan ini, kita terus menyelami potensi luar biasa yang dimilikinya. Mari terus menjelajahi, mengembangkan, dan
            memanfaatkan fiber optik untuk menciptakan dunia yang lebih terhubung, cerdas, dan maju.
          </p>

          <Code
            text={`return new Promise((resolve, reject) => {
    // get data from database
    API.get(path)
      .then((response) => {
        resolve(response.data.payload[0])
      })
      .catch((error) => {
        reject(new Error(error.message))
      })
  })`}
            lang={'js'}
            theme={'darcula'}
          />
        </div>

       

        <iframe
          width="100"
          height="100"
          src="https://www.youtube.com/embed/1zTPjy80iUU?si=o7fJ8FGwFfSTOaH4&amp;controls=0&autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          // autoPlay="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  )
}
