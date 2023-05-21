const getPercent = (value: number, total: number): string => {
    if (total === 0) {
        return '0%'
    }

    return ((value / total) * 100).toFixed(2) + '%'
}

export default getPercent