import axios from 'axios'

const results = {}

// export const get = (uri) => {
//   if (!results[uri]) {
//     results[uri] = axios.get(uri)
//   }
//   return results[uri]
// }

// export const forget = (uri) => {
//   results[uri] = undefined
//   delete results[uri]
// }

export default {
  get: (uri) => {
    if (!results[uri]) {
      results[uri] = axios.get(uri)
    }
    return results[uri]
  },
  getTopic: (id) => {
    let uri = 'https://talk.vtaiwan.tw/t/'+ id +'.json?include_raw=1'
    if (!results[uri]) {
      results[uri] = axios.get(uri)
    }
    return results[uri]
  },
  post: (uri,jsondata) =>{
    console.log("jsondata")
    console.log(jsondata)
    return axios.post(uri,jsondata)

  },

  forget: (uri) => {
    results[uri] = undefined
    delete results[uri]
  }
}