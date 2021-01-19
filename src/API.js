const API = 'https://jsonplaceholder.typicode.com'

export const getData = async (param) => {
    const result = await fetch(`${API}/${param}`)
    if (result.ok){
        return result.json()
    }
}