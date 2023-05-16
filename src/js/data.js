import List1 from '../components/More-components/List1'
import Repository from '../components/More-components/Repository'
import List2 from '../components/More-components/List2'
import MailMe from '../components/More-components/MailMe'
import json from './data.json'

// eslint-disable-next-line no-new-object
const data = new Object(json)

data.morePage[0] = {
  name: 'Repository',
  value: function () {
    return <Repository />
  }
}

data.morePage[1] = {
  name: 'Link',
  value: function () {
    return <List1 data={data.link} text={'link'} />
  }
}

data.morePage[2] = {
  name: 'Certificate',
  value: function () {
    return <List2 data={data.Certificate} altText={<div style={{ fontStyle: 'italic' }}>No Certificate now :)</div>} />
  }
}

data.morePage[3] = {
  name: 'Tools and Skils',
  value: function () {
    return <List1 data={data.skils} text={'skils'} />
  }
}

data.morePage[4] = {
  name: 'Experience',
  value: function () {
    return <List2 data={data.experience} altText={<div style={{ fontStyle: 'italic' }}>No work experience now :)</div>} />
  }
}

data.morePage[5] = {
  name: 'Blog',
  value: function () {
    return <List2 data={data.blog} altText={<div style={{ fontStyle: 'italic' }}>No Blog now :)</div>} />
  }
}

data.morePage[6] = {
  name: 'Mail Me',
  value: function () {
    return <MailMe />
  }
}

export default data
