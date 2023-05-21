import { RemoteBalance } from 'data'
import { ModelBalance } from 'domain'

const toModel = (data: RemoteBalance): ModelBalance => ({
    value: data?.value ?? 0,
})


export { toModel }

