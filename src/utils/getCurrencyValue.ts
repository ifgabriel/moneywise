const getCurrencyValue = (value: string) => {
    const numericValue = value.toString().replace(/[^\d.]/g, '');

    return parseFloat(numericValue)
}

export default getCurrencyValue