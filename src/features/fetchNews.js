import moment from 'moment'

export const fetchPosts = async () => {
    const today = moment().format('YYYY-MM-DD')
    const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
    const apiKey = 'd96c412525a34b8db90f5f82f561bde5'

    const url = `https://newsapi.org/v2/everything?q=tech&from=${yesterday}&to=${today}&sortBy=popularity&apiKey=${apiKey}`

    const response = await fetch(url)

    if (response.ok) {
        const data = await response.json()
        return data
    }
    else {
        throw new Error('Unable to fetch news')
    }
}

// 1 apiKey = 4a411cb1955c44b29e7ca8e57ccd198c
// 2 apiKey = d96c412525a34b8db90f5f82f561bde5