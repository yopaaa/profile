import { readdir } from 'fs'
import ResponseApi from '../../js/ResponseApi'

export default function handler(req, res) {
  readdir('./src/js', { encoding: 'utf8' }, (err, files) => {
    console.log(err)
    console.log(files)
    ResponseApi(req, res, 200, { name: 'John Doe', data: files })
  })
}
