import { useQuery } from '@tanstack/react-query'
import { Api } from '../http'

const useGetBalance = () =>
  useQuery(['get-balance'], () => Api.get('/balance').then(({ data }) => ({ ...data[0] })))

export default useGetBalance
