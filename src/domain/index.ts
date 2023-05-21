export type SpendingType = 'fixedExpenses' | 'entertainment' | 'studies' | 'food' | 'health'

export type ModelSpending = {
    total: number,
    spending: {
        type: SpendingType,
        value: number,
    }[]
}

export type ModelBalance = {
    value: number
}