import React, { useState, useEffect } from 'react';
import projects from './App.data';
import * as styled from './App.styled';

export default function App() {
    const [slide, setSlide] = useState(0);
    const [color, setColor] = useState(projects[0].color);

    useEffect(() => {
        const changeSlide = e => {
            let s = slide;
            if (e.key === 'ArrowRight' && slide < projects.length - 1)
                setSlide(s + 1);
            if (e.key === 'ArrowLeft' && slide > 0) setSlide(s - 1);
        };
        const resetSlide = () => setSlide(0);

        window.addEventListener('keyup', changeSlide);
        window.addEventListener('resize', resetSlide);
        setColor(projects[slide].color);

        return () => {
            window.removeEventListener('keyup', changeSlide);
            window.removeEventListener('resize', resetSlide);
        };
    }, [slide]);

    return (
        <>
            <styled.Projects
                style={{
                    transform: `translateX(-${window.innerWidth * slide}px)`,
                }}
            >
                {projects.map((p, i) => (
                    <styled.Project color={p.color} key={i}>
                        <img
                            className='thumbnail-img'
                            src={'/images/' + p.image}
                        />
                        <styled.Links color={p.color}>
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
                            {p.url.project && (
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
                        </styled.Links>
                        <p>{p.text}</p>
                    </styled.Project>
                ))}
            </styled.Projects>
            <styled.Background color={color}>
                <div className='background-glow' />
                <div className='background-shadow' />
            </styled.Background>
            <styled.Controls color={color}>
                <button
                    disabled={slide <= 0}
                    onClick={() => setSlide(slide - 1)}
                >
                    <i className='fas fa-chevron-left'></i>
                </button>
                <div>
                    {slide === 0 ? (
                        'HIT THE RIGHT ARROW-KEY TO BEGIN'
                    ) : (
                        <>
                            {slide}/{projects.length - 1}
                        </>
                    )}
                </div>
                <button
                    disabled={slide >= projects.length - 1}
                    onClick={() => setSlide(slide + 1)}
                >
                    <i className='fas fa-chevron-right'></i>
                </button>
            </styled.Controls>
        </>
    );
}
