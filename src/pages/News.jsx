import { useQuery } from "@tanstack/react-query"
import { fetchPosts } from "../features/fetchNews"
import Post from "../ui/Post"
import styled from "styled-components"

const NewsPage = styled.ul`
    background-color: #F0F0F0;
    padding: 1.2rem;
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

    if (isPending) return <p>Carregando...</p>
    if (error) return <p>Erro ao buscar posts!</p>

    return (
        <>
            <Header>
                <h4>Morbes</h4>
            </Header>
            <NewsPage>
                <ContainerNews>
                    {data.articles?.map((post, index) => (
                        <Post key={index} ObjNews={post} />
                    ))}
                </ContainerNews>
            </NewsPage>
        </>
    )
}