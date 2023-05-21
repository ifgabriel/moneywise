import { RemoteSpending } from 'data'
import { ModelSpending } from 'domain'

const toModel = (data: RemoteSpending): ModelSpending => { 
    const spending = Object.entries(data).map(([type, value]) => ({ type, value: value ?? 0 })) as ModelSpending['spending']
    const total = spending.reduce((acc, curr) => acc + curr.value, 0) ?? 0

    return ({
        total,
        spending
    })
}

export { toModel }

