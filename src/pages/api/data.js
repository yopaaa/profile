import ResponseApi from '../../js/ResponseApi'
import getData from '../../js/getData'

export default async function handler(req, res) {
  const queryKey = Object.keys(req.query)
  try {
    const resultData = await getData(queryKey)
    return ResponseApi(req, res, 200, resultData)
  } catch (error) {
    return ResponseApi(req, res, 400, null, [error.message])
  }
}
