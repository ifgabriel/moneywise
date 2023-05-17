import { useMutation } from '@tanstack/react-query'
import { Api } from '../http'

interface Params {
  customerId: string
}

const body = {
  salario: 100,
  alimentacao: 100,
  saude: 100,
  estudos: 100,
  entretenimento: 100,
  gastosFixos: 100,
}

const useEditValuesAccount = ({ customerId }: Params) =>
  useMutation(() => Api.post('/', body), {
    onSuccess: (data, error) => console.log('onSuccess', data, error),
    onError: (data, error) => console.log('onError', data, error),
  })

export default useEditValuesAccount
