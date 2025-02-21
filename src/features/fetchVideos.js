import moment from "moment"

export const fetchVideos = async () => {
    const channelId = 'UC0kP3MzeS1re1XqQ7ebKIrA'
    let apiKey
    const now = moment()
    const hour = now.hour()

    if (hour < 9) {
        apiKey = 'AIzaSyDH8LbPRhc39mxZtxb816GNazD8x8QE_Xc'
    }
    else if (hour < 17) {
        apiKey = 'AIzaSyBUI4UxzMQwKpcmlyplCc4wLZyDNNaPk2g'
    }
    else {
        apiKey = 'AIzaSyC-RmerxMKXLcAef-nTFo5B73SjahEPFb0'
    }

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=3&type=video&key=${apiKey}`

    const response = await fetch(url)

    if (response.ok) {
        const videos = await response.json()
        return videos
    }
    else {
        throw new Error('Unable to fetch videos')
    }
}

// https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0kP3MzeS1re1XqQ7ebKIrA&order=date&maxResults=3&type=video&key=AIzaSyBUI4UxzMQwKpcmlyplCc4wLZyDNNaPk2g
