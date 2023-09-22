import axios from 'axios'

export default function (queryKey) {
  const API = axios.create({ headers: { 'x-api-key': process.env.API_KEY } })
  const backendPath = process.env.BACKEND_HOST
  const username = process.env.USER_NAME
  let querytext = '?'
  queryKey.map((key) => {
    if (querytext.length < 5) return (querytext += key + '=1')
    return (querytext += '&' + key + '=1')
  })
  const path = `${backendPath}/visitors/${username}/data${querytext}`

  // console.log(path)
  return new Promise((resolve, reject) => {
    // get data from database
    API.get(path)
      .then((response) => {
        // console.log(response.data)
        resolve(response.data)
      })
      .catch((error) => {
        reject(new Error(error.message))
      })
  })
}
