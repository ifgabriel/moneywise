import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SpendingType } from 'data'
import { Api } from '../http'
import { endpoints } from './endpoints'

interface Params {
  type: SpendingType,
  value: number
}

const useEditSpending = () => {
  const client = useQueryClient()

  return useMutation(({type, value}: Params) => Api.patch(endpoints.editSpending, {[type]: value}), {
    onSuccess: (data) => {
      client.invalidateQueries(['get-spending'])
    }
  })
}

export default useEditSpending
