export const load = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await response.json()

    return {
      title: json.title,
    }
  }