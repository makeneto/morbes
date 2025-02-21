import { useQuery } from "@tanstack/react-query"
import { fetchPosts } from "../features/fetchNews"
import Post from "../ui/Post"
import styled from "styled-components"
import { fetchVideos } from "../features/fetchVideos"
import Video from "../ui/Video"
import Loader from "../ui/Loader"

const NewsPage = styled.ul`
    background-color: #F0F0F0;
    padding: 1.2rem;
`

const LatestVideos = styled.div`
    margin-top: 3.5rem;
    display: grid;
    gap: 0.8rem;

    & h1 {
        font-size: 1.4rem;
    }

    & .channel__intro {
        color: gray;
        font-weight: 500;
        font-size: 0.9rem;
        line-height: 1.3rem;
    }
`

const ContainerVideos = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 13rem);
    gap: 1.2rem;
    margin-top: 0.6rem;
    overflow-x: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

const ContainerNews = styled.ul`
    display: grid;
    gap: 0.8rem;
    grid-template-columns: 100%;
    margin-top: 3.5rem;
`

const Header = styled.h1`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem 1.2rem;
    position: fixed;
    top: 0;
    background: rgba(240,240,240,0.45);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);

    & h1 {
        font-style: "DM Serif Text", serif;
        font-size: 1.9rem;
        color: #042940;
    }
`

export default function News() {
    const { data, isPending, error } = useQuery({
        queryKey: ["news"],
        queryFn: fetchPosts,
    })

    const { data: videos, isPending: isLoading, errors } = useQuery({
        queryKey: ["videos"],
        queryFn: fetchVideos,
    })

    if (isPending || isLoading) return <Loader />
    if (error || errors) return <p>Erro ao buscar posts!</p>

    return (
        <>
            <Header>
                <h4>Morbes</h4>
            </Header>
            <NewsPage>
                <LatestVideos>
                    <h1>Explore more</h1>
                    <p className="channel__intro">Hey, you! Ready to grow? This channel gives you the push to level up! </p>

                    <ContainerVideos>
                        {videos.items.map((video) => (
                            <Video
                                key={video.id.videoId}
                                videoId={video.id.videoId}
                                ObjNews={video.snippet}
                                thumbnails={video.snippet.thumbnails.high.url}
                            />
                        ))}
                    </ContainerVideos>
                </LatestVideos>

                <ContainerNews>
                    {data.articles?.map((post, index) => (
                        <Post key={index} ObjNews={post} author={post.source.name} />
                    ))}
                </ContainerNews>
            </NewsPage>
        </>
    )
}
