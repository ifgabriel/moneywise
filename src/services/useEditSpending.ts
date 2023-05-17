import { useMutation } from '@tanstack/react-query'
import { Api } from '../http'

interface Params {
  body?: string
}

const useEditSpending = ({ body }: Params) => useMutation(() => Api.patch('/spending', {
  wage: 100,
  food: 150.5,
  health: 1000.5,
  studies: 200.4,
  entertainment: 350.53,
  fixedExpenses: 2050.49,
}), {
  onSuccess: (data) => console.log('onSuccess', data),
  onError: (data) => console.log('onError', data)
})

export default useEditSpending
