import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Api } from '../http'
import { endpoints } from './endpoints'

interface Params {
  value: number
}

const useEditBalance = () => {
  const client = useQueryClient()

  return useMutation(({ value }: Params) => Api.patch(endpoints.editBalance, { value }), {
    onSuccess: () => {
      client.invalidateQueries(['get-balance'])
    }
  })
}

export default useEditBalance
