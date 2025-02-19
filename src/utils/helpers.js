export function formatPublishedAt(publishedAt) {
    const date = new Date(publishedAt)
    const options = { hour: 'numeric', minute: 'numeric', hour12: true }
    const time = date.toLocaleTimeString('en-US', options)

    return `Today at ${time}`
}

// Exemplo de uso
const publishedAt = "2025-02-18T01:37:48Z"
console.log(formatPublishedAt(publishedAt)) // "Today at 1:37 AM"
