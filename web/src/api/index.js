import $axios from 'utils/axios'

export const getListApi = () => {
  return $axios.get('/demo/list')
}