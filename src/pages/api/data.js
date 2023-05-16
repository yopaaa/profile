import { readdir } from 'fs'
import ResponseApi from '../../js/ResponseApi'

export default function handler(req, res) {
  const path = req.query.path || './src/js'
  readdir(path, { encoding: 'utf8' }, (err, files) => {
    console.log(err)
    ResponseApi(req, res, 200, { name: 'John Doe', data: files })
  })
}
