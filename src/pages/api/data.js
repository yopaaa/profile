import axios from 'axios'
import ResponseApi from '../../js/ResponseApi'

export default async function handler(req, res) {
  const queryKey = Object.keys(req.query)
  let querytext = '?'
  let resultData
  queryKey.map((key) => {
    if (querytext.length < 5) return (querytext += key + '=1')
    return (querytext += '&' + key + '=1')
  })

  const API = axios.create({ headers: { 'x-api-key': process.env.API_KEY } })
  const backendPath = process.env.BACKEND_HOST
  const username = process.env.USER_NAME

  try {
    const path = `${backendPath}/visitors/${username}${querytext}`
    const postVisitors = await API.get(path)
    resultData = postVisitors.data.payload
  } catch (error) {
    ResponseApi(req, res, 400, null, [error.message])
    return
  }
  ResponseApi(req, res, 200, resultData)
}
