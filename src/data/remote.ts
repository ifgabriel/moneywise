export type SpendingType = 'fixedExpenses' | 'entertainment' | 'studies' | 'food' | 'health'
export type RemoteSpending = Record<SpendingType, number>
export type RemoteBalance = {
    value: number
}