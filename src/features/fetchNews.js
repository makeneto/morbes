import moment from "moment"

export const fetchPosts = async () => {
    const now  = moment()
    const time = now.hour()
    let apiKey
    const maxNews = 100
    const category = 'technology'
    const country = 'us'
    const lang = 'en'

    if (time < 12) {
        apiKey = '72f2384b8fabd497fe835e37b095c28c'
    } else {
        apiKey = '87b64addfaf3b5b49df762bb34e03262'
    }

    const url = `https://gnews.io/api/v4/search?q=example&lang=${lang}&country=${country}&max=${maxNews}&apikey=${apiKey}&category=${category}`

    const response = await fetch(url)

    if (response.ok) {
        const data = await response.json()
        return data
    }
    else {
        throw new Error('Unable to fetch news')
    }
}

// 1 apiKey = 72f2384b8fabd497fe835e37b095c28c
// 2 apiKey = 87b64addfaf3b5b49df762bb34e03262

// https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=100&apikey=72f2384b8fabd497fe835e37b095c28c&category=technology
