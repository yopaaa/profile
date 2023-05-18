import List1 from '../components/More-components/List1'
import Repository from '../components/More-components/Repository'
import List2 from '../components/More-components/List2'
import MailMe from '../components/More-components/MailMe'

// eslint-disable-next-line no-new-object
const data = { morePage: [] }

data.morePage[0] = {
  name: 'Repository',
  value: function () {
    return <Repository />
  }
}

data.morePage[1] = {
  name: 'Link',
  value: function () {
    return <List1 path={'/api/data?link=1'} ObjKey={'link'} />
  }
}

data.morePage[2] = {
  name: 'Certificate',
  value: function () {
    return (
      <List2
        path={'/api/data?Certificate=1'}
        ObjKey={'Certificate'}
        altText={<div style={{ fontStyle: 'italic' }}>No Certificate now :)</div>}
      />
    )
  }
}

data.morePage[3] = {
  name: 'Tools and Skils',
  value: function () {
    return <List1 path={'/api/data?skills=1'} ObjKey={'skills'} />
  }
}

data.morePage[4] = {
  name: 'Experience',
  value: function () {
    return (
      <List2
        path={'/api/data?Experience=1'}
        ObjKey={'experience'}
        altText={<div style={{ fontStyle: 'italic' }}>No work experience now :)</div>}
      />
    )
  }
}

data.morePage[5] = {
  name: 'Blog',
  value: function () {
    return <List2 path={'/api/data?Blog=1'} ObjKey={'blog'} altText={<div style={{ fontStyle: 'italic' }}>No Blog now :)</div>} />
  }
}

data.morePage[6] = {
  name: 'Mail Me',
  value: function () {
    return <MailMe />
  }
}

export default data
