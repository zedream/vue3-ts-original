import axios from './axios'

class HttpRequest implements RequestMethods {
  get (url, params?) {
    return new Promise<ResponseData>((resolve, reject) => {
      axios.get(url, { params }).then((res) => {
        if (res.data.errorCode === '00000') {
          resolve(res.data)
        } else {
          reject(res.data.msg)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }

  post (url, data) {
    return new Promise<ResponseData>((resolve, reject) => {
      axios.post(url, data).then((res) => {
        if (res.data.errorCode === '00000') {
          resolve(res.data)
        } else {
          reject(res.data.msg)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }

  put (url, data) {
    return new Promise<ResponseData>((resolve, reject) => {
      axios.put(url, data).then((res) => {
        if (res.data.errorCode === '00000') {
          resolve(res.data)
        } else {
          reject(res.data.msg)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }

  delete (url, data?) {
    return new Promise<ResponseData>((resolve, reject) => {
      axios.delete(url, { data }).then((res) => {
        if (res.data.errorCode === '00000') {
          resolve(res.data)
        } else {
          reject(res.data.msg)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }

  getBlob (url, params?, headers?, responseType?) {
    return new Promise<BlobPart>((resolve, reject) => {
      axios.get(url, { params, headers, responseType }).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

export default new HttpRequest()
