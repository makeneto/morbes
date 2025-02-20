import moment from "moment"
import { Link } from "react-router-dom"
import styled from "styled-components"

const CardVideo = styled(Link)`
    color: black;
    text-decoration: none;

    & h2 {
        margin-top: 0.9rem;
        font-size: 1rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    & p {
        color: gray;
        margin-top: 0.9rem;
        font-size: 0.8rem;
        font-weight: 500;
    }
`

const Thumbnails = styled.img`
    width: 100%;
    height: 7rem;
    object-fit: cover;
`

const Author = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: black;
    margin-top: 0.5rem;

    & img {
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
    }

    & span {
        font-size: 0.9rem;
        color: black;
        font-weight: 500;
        margin-bottom: 0 !important;
    }
`

export default function Video({ thumbnails, videoId, ObjNews }) {
    const { channelTitle, title, publishTime } = ObjNews

    return (
        <CardVideo to={`https://youtu.be/${videoId}`}>
            <Thumbnails src={thumbnails} alt="Teste" />
            <Author>
                <img src="/nublson-profile.jpeg" alt="NUbelson Profile" />
                <span>{channelTitle}</span>
            </Author>
            <h2>{title}</h2>
            <p>{moment(publishTime).format("MMM D, YYYY")}</p>
        </CardVideo>
    )
}