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
        box-shadow: 0 20px 80px rgba(0, 0, 0, 0.9);
    }
    & > p {
        margin: 0 20px;
        color: ${props => props.color};
        font-size: 18px;
        text-align: center;
        max-width: 500px;
    }
`;

const StyledLinks = styled.div`
    display: flex;
    width: 300px;
    margin: 25px 0;
    z-index: 10;
    & a {
        flex: 1;
        text-transform: uppercase;
        color: ${props => props.color};
        border: 2px solid ${props => props.color};
        padding: 6px 14px;
        border-radius: 8px;
        display: inline-block;
        text-align: center;
        cursor: pointer;
        transition: 0.1s;
        font-weight: bold;
        text-decoration: none;

        &:first-of-type {
            border-right: 1px solid ${props => props.color};
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            &:hover {
                color: white;
                border-color: white;
            }
        }
        &:last-of-type {
            border-left: 1px solid ${props => props.color};
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            &:hover {
                color: white;
                border-color: white;
            }
        }
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
        transition: 2s;
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

const StyledCVL = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
`;

const StyledControls = styled.div`
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;
    z-index: 10;
    transition: 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.color};
    & button {
        background: transparent;
        color: ${props => props.color};
        border: 2px solid ${props => props.color};
        outline: none;
        font-size: 20px;
        width: 50px;
        height: 50px;
        border-radius: 10px;
        transition: 0.2s;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        &:disabled {
            opacity: 0.5;
            cursor: default;
        }
        &:not(:disabled):hover {
            color: white;
            border: 2px solid white;
        }
    }
`;

function App() {
    const [slide, setSlide] = useState(0);
    const [color, setColor] = useState(projects[0].color);

    useEffect(() => {
        function onKeyup(e) {
            let s = slide;
            if (e.key === 'ArrowRight' && slide < projects.length - 1)
                setSlide(s + 1);
            if (e.key === 'ArrowLeft' && slide > 0) setSlide(s - 1);
        }
        window.addEventListener('keyup', onKeyup);
        return () => window.removeEventListener('keyup', onKeyup);
    }, [slide]);

    useEffect(() => setColor(projects[slide].color), [slide]);

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
                        <StyledLinks color={p.color}>
                            {p.url.cv && (
                                <a
                                    color={p.color}
                                    href={p.url.cv}
                                    target='_blank'
                                >
                                    CV
                                </a>
                            )}
                            {p.url.linkedin && (
                                <a
                                    color={p.color}
                                    href={p.url.linkedin}
                                    target='_blank'
                                >
                                    Linkedin
                                </a>
                            )}
                            {p.url.code && (
                                <a
                                    color={p.color}
                                    href={p.url.project}
                                    target='_blank'
                                >
                                    Open Project
                                </a>
                            )}
                            {p.url.code && (
                                <a
                                    color={p.color}
                                    href={p.url.code}
                                    target='_blank'
                                >
                                    Source Code
                                </a>
                            )}
                        </StyledLinks>
                        <p>{p.text}</p>
                    </StyledProject>
                ))}
            </StyledProjects>
            <StyledBackground color={color}>
                <div className='background-img' />
                <div className='gradient'></div>
            </StyledBackground>
            {/* <StyledCVL>
                <StyledLink href='/' color={color} target='_blank'>
                    CV
                </StyledLink>
                <StyledLink
                    href='https://www.linkedin.com/in/dominic-butler-816b31119/'
                    color={color}
                    target='_blank'
                >
                    Linkedin
                </StyledLink>
            </StyledCVL> */}
            <StyledControls color={color}>
                <button
                    disabled={slide <= 0}
                    onClick={() => setSlide(slide - 1)}
                >
                    <i className='fas fa-chevron-left'></i>
                </button>
                <div>
                    {slide + 1}/{projects.length}
                </div>
                <button
                    disabled={slide >= projects.length - 1}
                    onClick={() => setSlide(slide + 1)}
                >
                    <i className='fas fa-chevron-right'></i>
                </button>
            </StyledControls>
        </>
    );
}

export default App;
