type RenderState = 'error' | 'loading' | 'empty' | 'view'

const getRenderState = (isFetched = false, isError = false, data: unknown): RenderState => {
    if (isError) {
        return 'error'
    }

    if (isFetched && !!data) {
        return 'view'
    }

    if (isFetched && !data) {
        return 'empty'
    }

    return 'loading'
}

export default getRenderState