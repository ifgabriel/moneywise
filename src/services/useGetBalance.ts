import { useQuery } from '@tanstack/react-query'
import { Api } from '../http'
import { toModel } from './converters/getBalanceConverter'
import { endpoints } from './endpoints'

const useGetBalance = () =>
  useQuery(['get-balance'], () => Api.get(endpoints.getBalance).then(({ data }) => toModel(data)))

export default useGetBalance
