import $axios from 'utils/axios'

// 获取验证码
export const getCaptcha = () => {
  return $axios.get('/user/captcha')
}
// 登录
export const login = (params) => {
  return $axios.post('/user/login', params)
}