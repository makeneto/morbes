import { HiOutlineX } from "react-icons/hi"
import styled from "styled-components"

const Modal = styled.div`
    background-color: white;
    padding: 0.8rem;
    width: 90%;
    border-radius: 0.4rem;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    & svg {
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
    }
`

const Author = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: gray;
`

const PublishedAt = styled.p`
    font-size: 0.7rem;
    color: gray;
`

const Title = styled.h1`
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.7rem;
`

const Description = styled.p`
    font-size: 0.9rem;
    color: gray;
    line-height: 1.3rem;
    margin-bottom: 1.2rem;
`

const Image = styled.img`
    width: 100%;
    max-height: 13rem;
    border-radius: 0.4rem;
    object-fit: cover;
    margin-bottom: 0.9rem;
`

export default function PrevModal({
    onClose,
    publishedAt,
    title,
    author,
    description,
    image
}) {
    return (
        <Modal>
            <Header>
                <Author>{author}</Author>
                <HiOutlineX onClick={onClose} />
            </Header>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Image src={image} alt="News Photo" />

            <PublishedAt>{publishedAt}</PublishedAt>
        </Modal>
    )
}