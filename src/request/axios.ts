import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10 * 1000,
  headers: {
    'content-type': 'application/json'
  }
})

instance.interceptors.request.use((config) => {
  return config
}, (error) => Promise.reject(error))

instance.interceptors.response.use((response) => {
  return response
}, (error) => Promise.reject(error))

export default instance
