import styled from 'styled-components';

export const Projects = styled.div`
display: flex;
width: 100vw;
height: 100vh;
transition: 0.3s;
`;

export const Project = styled.div`
width: 100vw;
height: 100vh;
flex-shrink: 0;
position: relative;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
@media (max-height: 800px) {
    justify-content: flex-start;
}
flex-direction: column;
color: white;
& .thumbnail-img {
    @media (max-height: 800px) {
        margin-top: 40px;
    }
    width: 300px;
    @media (max-height: 600px) {
        width: 150px;
        margin-top: 20px;
    }
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

export const Links = styled.div`
margin: 25px;
& a {
    text-transform: uppercase;
    color: ${props => props.color};
    cursor: pointer;
    transition: 0.1s;
    font-weight: bold;
    margin: 0 10px;
    text-decoration: none;
    border-bottom: 2px solid ${props => props.color};
    &:hover {
        color: white;
        border-color: white;
    }
}
`;

export const Background = styled.div`
& .background-glow {
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
& .background-shadow {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-image: radial-gradient(transparent, black);
    @media (max-height: 800px) {
        background-image: linear-gradient(to bottom, transparent, black);
    }
}
`;

export const Controls = styled.div`
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
    & div {
        @media (max-width: 500px) {
            max-width: 180px;
        }
        text-align: center;
    }
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