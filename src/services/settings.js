import Axios from 'axios'
import { getToken } from '../services/authService'

const BASE_URL = 'http://localhost:4000/api/v1'

export const axios = Axios.create({
  baseURL: BASE_URL,
  // timeout: 10000,
  params: {}
})

export const interceptor = () => {
  axios.interceptors.request.use(function (config) {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `bearer ${token}`
    }
    return config
  })
}