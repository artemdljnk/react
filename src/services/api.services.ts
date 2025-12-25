const endpoint = import.meta.env.VITE_API_BASE_URL + '/todos'

export const loadTodos = async () => {
    return await fetch(endpoint)
    .then(value => value.json())
}
