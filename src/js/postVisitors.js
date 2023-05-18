import axios from 'axios'

export default function (data) {
  const API = axios.create({ headers: { 'x-api-key': process.env.API_KEY } })
  const backendPath = process.env.BACKEND_HOST
  const username = process.env.USER_NAME

  const path = `${backendPath}/visitors/${username}/new`
  const { userAgent, ipAddress } = data

  return new Promise((resolve, reject) => {
    // get data from database
    API.post(path, { userAgent, ipAddress })
      .then((response) => {
        resolve(response.data.payload)
      })
      .catch((error) => {
        reject(new Error(error.message))
      })
  })
}
