import ResponseApi from '../../js/ResponseApi'
import axios from 'axios'

export default async function handler(req, res) {
  const userAgent = req.headers['user-agent']
  const data = req.body.msg
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress

  const API = axios.create({ headers: { 'x-api-key': process.env.API_KEY } })
  const backendPath = process.env.BACKEND_HOST
  const username = process.env.USER_NAME
  const path = `${backendPath}/anonymous/${username}/new`

  // get data from database
  API.post(path, { userAgent, msg: data, ipAddress })
    .then((response) => {
      return ResponseApi(req, res, 200, 'ok')
    })
    .catch((error) => {
      console.log(error.msg)
      return ResponseApi(req, res, 400, error.message)
    })
}
