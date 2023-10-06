import ResponseApi from '../../js/ResponseApi'
import axios from 'axios'

function getData(_id) {
  const API = axios.create({ headers: { 'x-api-key': process.env.API_KEY } })
  const backendPath = process.env.BACKEND_HOST
  const username = process.env.USER_NAME
  let querytext = '?'
  _id.map((key) => {
    if (querytext.length < 5) return (querytext += key + '=1')
    return (querytext += '&' + key + '=1')
  })
  const pathh = `${backendPath}/visitors/${username}/data/Experience${querytext}`
  return new Promise((resolve, reject) => {
    API.get(pathh)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(new Error(error.message))
      })
  })
}

export default async function handler(req, res) {
  const queryKey = Object.keys(req.query)
  try {
    const resultData = await getData(queryKey)
    return ResponseApi(req, res, 200, resultData.payload)
  } catch (error) {
    return ResponseApi(req, res, 400, null, [error.message])
  }
}
