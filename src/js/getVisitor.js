import axios from 'axios'

export default async function () {
  const API = axios.create({ headers: { 'x-api-key': process.env.API_KEY } })
  const backendPath = process.env.BACKEND_HOST
  const username = process.env.USER_NAME
  const path = `${backendPath}/visitors/${username}/count`

  return new Promise((resolve, reject) => {
    // get data from database
    API.get(path)
      .then((response) => {
        resolve(response.data.payload)
      })
      .catch((error) => {
        reject(new Error(error.message))
      })
  })
  //   try {
  //     const getVisitorCount = await API.get(, {})
  //     visitorCount = getVisitorCount.data.payload.count

  //     return { visitorCount }
  //   } catch (err) {
  //     return {
  //       err: err.message
  //     }
  //   }
}

export function x(data) {
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
