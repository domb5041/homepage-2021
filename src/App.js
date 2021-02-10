import React, { useState, useEffect } from 'react';
import projects from './projectData';
import styled from 'styled-components';

const StyledProjects = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    transition: 0.3s;
`;

const StyledProject = styled.div`
    width: 100vw;
    height: 100vh;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    & .thumbnail-img {
        width: 300px;
        border-radius: 20px;
        margin: 10px;
        box-shadow: 0 20px 80px rgba(0, 0, 0, 0.9);
    }
    & > p {
        margin: 25px 20px;
        color: ${props => props.color};
        font-size: 18px;
        font-weight: bold;
        text-align: center;
    }
`;

const StyledLink = styled.a`
    text-transform: uppercase;
    margin: 0 5px;
    color: ${props => props.color};
    border: 2px solid ${props => props.color};
    padding: 7px 14px;
    border-radius: 20px;
    min-width: 50px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    transition: 0.1s;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        transform: scale(1.05);
    }
`;

const StyledBackground = styled.div`
    & .background-img {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -2;
        opacity: 0.4;
        background-color: ${props => props.color};
        transition: 1.5s;
    }
    & .gradient {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background-image: radial-gradient(transparent, black);
    }
`;

const StyledControls = styled.div`
    position: fixed;
    bottom: 10px;
    left: 50%;
    z-index: 10;
    transform: translateX(-50%);
    & button {
        background: transparent;
        color: white;
        border: 2px solid white;
        outline: none;
        font-size: 35px;
        margin: 0 5px;
        width: 46px;
        border-radius: 10px;
        transition: 0.2s;
        cursor: pointer;
        &:disabled {
            opacity: 0.5;
            cursor: default;
        }
        &:not(:disabled):hover {
            background: rgba(255, 255, 255, 0.15);
        }
    }
`;

function App() {
    const [slide, setSlide] = useState(0);
    const [color, setColor] = useState(projects[0].color);

    // useEffect(() => {
    //     let newSlide = slide;
    //     document.addEventListener('keydown', function (e) {
    //         switch (e.keyCode) {
    //             case 37:
    //                 setSlide(newSlide--);
    //                 break;
    //             case 39:
    //                 setSlide(newSlide++);
    //                 break;
    //         }
    //     });
    // }, []);

    useEffect(() => {
        setColor(projects[slide].color);
    }, [slide]);

    return (
        <>
            <StyledProjects
                style={{
                    transform: `translateX(-${window.innerWidth * slide}px)`,
                }}
            >
                {projects.map((p, i) => (
                    <StyledProject color={p.color}>
                        <img
                            className='thumbnail-img'
                            src={'/images/' + p.image}
                        />
                        <p>{p.text}</p>
                        {i === 0 ? (
                            <div>
                                <StyledLink
                                    href={p.url.cv}
                                    color={p.color}
                                    target='_blank'
                                >
                                    CV
                                </StyledLink>
                                <StyledLink
                                    href={p.url.linkedin}
                                    color={p.color}
                                    target='_blank'
                                >
                                    Linkedin
                                </StyledLink>
                            </div>
                        ) : (
                            <div>
                                <StyledLink
                                    color={p.color}
                                    href={p.url.project}
                                    target='_blank'
                                >
                                    Open Project
                                </StyledLink>
                                {p.url.code && (
                                    <StyledLink
                                        color={p.color}
                                        href={p.url.code}
                                        target='_blank'
                                    >
                                        Source Code
                                    </StyledLink>
                                )}
                            </div>
                        )}
                    </StyledProject>
                ))}
            </StyledProjects>
            <StyledBackground color={color}>
                <div className='background-img' />
                <div className='gradient'></div>
            </StyledBackground>
            <StyledControls>
                <button
                    disabled={slide <= 0}
                    onClick={() => setSlide(slide - 1)}
                >
                    {'<'}
                </button>
                <button
                    disabled={slide >= projects.length - 1}
                    onClick={() => setSlide(slide + 1)}
                >
                    {'>'}
                </button>
            </StyledControls>
        </>
    );
}

export default App;
