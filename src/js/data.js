import List1 from '../components/More-components/List1'
import Repository from '../components/More-components/Repository'
import List2 from '../components/More-components/List2'
import MailMe from '../components/More-components/MailMe'

const data = {
  name: 'Yopa pitra ramadhani',
  des: '``I am a student of computer network engineering who possesses skills in web programming, IoT, and cloud computing. I am very enthusiastic and always eager to learn new things in the field of information technology. I hope to utilize my skills to contribute to the world of technology and achieve success in the future.``',
  address: 'Bangka-Belitung Islands, Indonesia',
  work: 'Fullstack developer',
  email: 'yopapitrar@gmail.com',
  githubUsername: 'yopaaa',
  link: [
    {
      name: 'github',
      link: 'https://github.com/yopaaa',
      img: '/images/icon/github.png'
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/yopaaa/',
      img: '/images/icon/linkedin.png'
    },
    {
      name: 'Email me',
      link: 'mailto:yopapitrar@gmail.com',
      img: '/images/icon/email.png'
    },
    {
      name: 'Instagram',
      link: 'https://instagram.com/yopapr',
      img: '/images/icon/instagram.png'
    },
    {
      name: 'twitter',
      link: 'https://twitter.com',
      img: '/images/icon/twitter.png'
    }
  ],
  morePage: [
    {
      name: 'Repository',
      value: function () {
        return <Repository />
      }
    },
    {
      name: 'Link',
      link: [
        {
          name: 'github',
          link: 'https://github.com/yopaaa',
          img: '/images/icon/github.png'
        },
        {
          name: 'linkedin',
          link: 'https://www.linkedin.com/in/yopaaa/',
          img: '/images/icon/linkedin.png'
        },
        {
          name: 'Email me',
          link: 'mailto:yopapitrar@gmail.com',
          img: '/images/icon/email.png'
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/yopapr',
          img: '/images/icon/instagram.png'
        },
        {
          name: 'youtube',
          link: 'https://youtube.com',
          img: '/images/icon/youtube.png'
        },
        {
          name: 'twitter',
          link: 'https://twitter.com',
          img: '/images/icon/all.png'
        },
        {
          name: 'fecebook',
          link: 'https://fecebook.com',
          img: '/images/icon/all.png'
        }
      ],
      value: function () {
        return <List1 data={this.link} text={'link'} />
      }
    },
    {
      name: 'Certificate',
      Certificate: [
        {
          name: 'Dicoding',
          title: 'Basic JavaScript Programming',
          des: 'certificate of graduation from dicoding indonesia, i got it in june 2022',
          img: '/images/dicoding.png',
          date: 'June 23, 2022',
          link: 'https://www.dicoding.com/certificates/81P2GVOVOPOY'
        },
        {
          name: 'LKS Province 2022',
          title: 'Cloud computing (AWS)',
          des: 'Successfully obtained first place in the Provincial Science Competition, thus having the opportunity to represent Bangka Belitung Islands at the national level',
          img: '/images/scholl.png',
          date: '27 August 22',
          link: '/Document/Sertifikat-Juara-LKS-SMK-2022.pdf'
        },
        {
          name: 'Dicoding',
          title: 'Back-End for Beginners',
          des: 'Learning to create a backend application using Node.js technology and Hapi as the framework.',
          img: '/images/dicoding.png',
          date: 'November 17, 2022',
          link: 'https://www.dicoding.com/certificates/1OP850G81PQK'
        },
        {
          name: 'LKS Nasional 2022',
          title: 'Cloud computing (AWS)',
          des: 'Creating and deploying scalable and efficient cloud-based applications, successfully achieving a medal of excellence.',
          img: '/images/LKSN.png',
          date: 'October 29, 2022',
          link: '/Document/sertifikat-lks-nasional-yopa-Excellence.pdf'
        }
      ],
      value: function () {
        return <List2 data={this.Certificate} altText={<div style={{ fontStyle: 'italic' }}>No Certificate now :)</div>} />
      }
    },
    {
      name: 'Tools and Skils',
      skils: [
        {
          name: 'AWS',
          link: null,
          img: null
        },
        {
          name: 'Docker',
          link: null,
          img: null
        },
        {
          name: 'Networking',
          link: null,
          img: null
        },
        {
          name: 'Windows',
          link: null,
          img: null
        },
        {
          name: 'Linux desktop',
          link: null,
          img: null
        },
        {
          name: 'Linux server',
          link: null,
          img: null
        },
        {
          name: 'React js',
          link: null,
          img: null
        },
        {
          name: 'Nextjs',
          link: null,
          img: null
        },
        {
          name: 'React native',
          link: null,
          img: null
        },
        {
          name: 'Vs Code',
          link: null,
          img: null
        },
        {
          name: 'Git',
          link: null,
          img: null
        },
        {
          name: 'Mysql',
          link: null,
          img: null
        },
        {
          name: 'Mongo DB',
          link: null,
          img: null
        },
        {
          name: 'Css',
          link: null,
          img: null
        },
        {
          name: 'HTML',
          link: null,
          img: null
        },
        {
          name: 'Java Script',
          link: null,
          img: null
        },
        {
          name: 'Node js',
          link: null,
          img: null
        },
        {
          name: 'Arduino',
          link: null,
          img: null
        },
        {
          name: 'C++',
          link: null,
          img: null
        }
      ],
      value: function () {
        return <List1 data={this.skils} text={'skils'} />
      }
    },
    {
      name: 'Experience',
      experience: [
        // {
        //   name: 'Google',
        //   title: 'Software Engineer',
        //   des: 'Worked on various projects related to machine learning and artificial intelligence.',
        //   img: '/images/google.png',
        //   date: 'May 2019 - Present',
        //   link: 'https://www.google.com'
        // },
        // {
        //   name: 'Microsoft',
        //   title: 'Software Developer',
        //   des: 'Developed enterprise-level software solutions for various clients.',
        //   img: '/images/microsoft.png',
        //   date: 'January 2017 - April 2019',
        //   link: 'https://www.microsoft.com'
        // },
        // {
        //   name: 'Amazon',
        //   title: 'Senior Software Engineer',
        //   des: 'Designed and implemented scalable and high-performance systems for Amazon Web Services.',
        //   img: '/images/amazon.png',
        //   date: 'July 2014 - December 2016',
        //   link: 'https://www.amazon.com'
        // }
      ],
      value: function () {
        return <List2 data={this.experience} altText={<div style={{ fontStyle: 'italic' }}>No work experience now :)</div>} />
      }
    },
    {
      name: 'Blog',
      blog: [
        // {
        //   title: 'Post 1',
        //   des: 'This is the first post on my blog.',
        //   img: '/images/post1.jpg',
        //   date: 'April 29, 2023',
        //   link: '/post-1'
        // },
        // {
        //   title: 'Post 2',
        //   des: 'This is the second post on my blog.',
        //   img: '/images/post2.jpg',
        //   date: 'May 1, 2023',
        //   link: '/post-2'
        // },
        // {
        //   title: 'Post 3',
        //   des: 'This is the third post on my blog.',
        //   img: '/images/post3.jpg',
        //   date: 'May 3, 2023',
        //   link: '/post-3'
        // }
      ],
      value: function () {
        return <List2 data={this.blog} altText={<div style={{ fontStyle: 'italic' }}>No Blog now :)</div>} />
      }
    },
    {
      name: 'Mail Me',
      value: function () {
        return <MailMe />
      }
    }
  ]
}

export default data
