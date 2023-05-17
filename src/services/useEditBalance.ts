import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Api } from '../http'

interface Params {
  value: number
}

const useEditBalance = () => {
  const client = useQueryClient()

  return useMutation(({ value }: Params) => Api.patch('/balance', { value }), {
    onSuccess: () => {
      client.invalidateQueries(['get-balance'])
    }
  })
}

export default useEditBalance
