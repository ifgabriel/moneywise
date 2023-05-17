const formatCurrency = (value: number) => {
    return 'R$' + value.toLocaleString('pt-br', { minimumFractionDigits: 2 })
}

export default formatCurrency