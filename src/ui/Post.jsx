import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion";

import { formatPublishedAt } from "../utils/helpers"
import { HiOutlineArrowRight } from "react-icons/hi"
import PrevModal from "./PrevModal"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease-in-out;
`;

const News = styled.li`
    background-color: white;
    padding: 0.6rem 0.8rem;
    border-radius: 0.6rem;
    display: grid;
    gap: 0.4rem;
    cursor: pointer;
    transition: filter 0.3s ease-in-out;
    ${({ isDisabled }) => isDisabled && "filter: blur(3px); opacity: 0.5; pointer-events: none;"}
`

const NewsBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`

const ContentNews = styled.div`
    display: grid;
    gap: 0.5rem;
`

const Author = styled.div`
    font-size: 0.8rem;
    color: rgba(5, 54, 84, 0.78);

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

const Title = styled.h3`
    font-size: 0.9rem;
    font-weight: 600;
    color: #042940;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

const Description = styled.p`
    font-size: 0.8rem;
    color: rgba(5, 54, 84, 0.78);
    line-height: 1rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

const PublishedAt = styled.p`
    font-size: 0.6rem;
    color: #053654;
`

const Image = styled.img`
    border-radius: 0.7rem;
    width: 5.3rem;
    height: 5.3rem;
    object-fit: cover;
`
const NewsDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ReadMore = styled(Link)`
    color: #0339A6;
    text-decoration: none;
    display: flex;
    gap: 0.3rem;
    align-items: center;
    font-size: 0.8rem;
    transition: all .2s ease-in;

    &:hover {
        gap: 0.5rem;
    }
`

export default function Post({ author, ObjNews }) {
    const { url, title, description, content, publishedAt, image } = ObjNews
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => document.body.style.overflow = "auto";
    }, [isModalOpen]);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false)
    }, [])

    return (
        image && (
            <>
                {isModalOpen && <Overlay />}
                <News onClick={() => setIsModalOpen(true)} isDisabled={isModalOpen}>
                    <NewsBlock>
                        <ContentNews>
                            <Author>{author}</Author>
                            <Title>{title}</Title>
                            <Description>{description}</Description>
                        </ContentNews>
                        <Image src={image} alt="News Image" loading="lazy" />
                    </NewsBlock>
                    <NewsDetails>
                        <PublishedAt>{formatPublishedAt(publishedAt)}</PublishedAt>
                        <ReadMore to={url}>
                            Read More
                            <HiOutlineArrowRight />
                        </ReadMore>
                    </NewsDetails>
                </News>

                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: '0.2' }}
                            key="modal"
                        >
                            <PrevModal
                                isOpen={isModalOpen}
                                onClose={handleCloseModal}
                                title={title}
                                author={author}
                                description={content}
                                image={image}
                                publishedAt={formatPublishedAt(publishedAt)}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
        )
    )
}
