import { useQuery } from '@tanstack/react-query'
import { Api } from '../http'
import { toModel } from './converters/getSpendingConverter'
import { endpoints } from './endpoints'

const useGetSpending = () =>
  useQuery(['get-spending'], () => Api.get(endpoints.getSpending).then(({ data }) => toModel(data)))

export default useGetSpending
