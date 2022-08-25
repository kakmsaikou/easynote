import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://node-server.hunger-valley.com'

/*
request('/auth/login', 'POST', {username: 'Tacitus', password: '123456'})
  .then(data => {
    console.log(data)
  })
*/


export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
      validateStatus(status) {
        return (status >= 200 && status < 300) || status === 400
      }
    }
    if (type.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }
    axios(option).then(res => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        console.error(res.data)
        reject(res.data)
      }
    }).catch(error => {
      reject({msg: '网络异常'})
    })
  })
}
