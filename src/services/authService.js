import Axios from 'axios'

const TOKEN_KEY = 'APP_TOKEN'
const url = 'http://localhost:4000/api/v1'

export const setToken = token => localStorage.setItem(TOKEN_KEY, token)

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const deleteToken = () => localStorage.removeItem(TOKEN_KEY)

export const axios = Axios.create({
  baseURL: url,
  // timeout: 10000,
  params: {}
})
export const interceptor = () => {
  axios.interceptors.request.use(function(config) {
    debugger
    const token = getToken()
    if (token) {
      config.headers.Authorization = `bearer ${token}`
    }
    return config
  })
}


export default { setToken, getToken, deleteToken, interceptor, axios }