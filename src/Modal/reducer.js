export const styleReducer = (style, newStyle) => {
    const result = Object.create(style)
    Object.keys(newStyle).forEach(key => {
        result[key] = {...style[key], ...newStyle[key]}
    })
    return result
}