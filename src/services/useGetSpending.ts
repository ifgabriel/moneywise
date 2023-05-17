import { useQuery } from '@tanstack/react-query'
import { Api } from '../http'

const useGetSpending = () =>
  useQuery(['get-spending'], () => Api.get('/spending').then(({ data }) => ({ ...data[0] })))

export default useGetSpending
