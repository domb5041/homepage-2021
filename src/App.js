import projects from './projectData';
import styled from 'styled-components';

const StyledProject = styled.div`
    width: 100vw;
    height: 100vh;
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
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.7);
    }
    & .background-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -2;
        transform: scale(1.1);
        filter: blur(100px) saturate(3);
        opacity: 0.4;
    }
    & .gradient {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 20%,
            rgba(0, 0, 0, 0) 80%,
            rgba(0, 0, 0, 1) 100%
        );
    }
`;

const StyledLink = styled.a`
    text-transform: uppercase;
    margin: 0 5px;
    background-color: #ec6b81;
    padding: 7px 14px;
    border-radius: 20px;
    min-width: 50px;
    display: inline-block;
    text-align: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.1s;
    font-weight: bold;
    &:hover {
        transform: scale(1.05);
    }
`;

function App() {
    return (
        <div>
            {projects.map((p, i) => (
                <StyledProject>
                    <img
                        className='background-img'
                        src={'/images/' + p.image}
                    />
                    <div className='gradient'></div>
                    <img className='thumbnail-img' src={'/images/' + p.image} />
                    <p>{p.text}</p>
                    {i === 0 ? (
                        <div>
                            <StyledLink style={{background: '#C768C1'}}>CV</StyledLink>
                            <StyledLink style={{ background: '#23529C' }}>
                                Linkedin
                            </StyledLink>
                            <StyledLink style={{ background: '#3A833F' }}>
                                GitHub
                            </StyledLink>
                        </div>
                    ) : (
                        <div>
                            <StyledLink>Open Project</StyledLink>
                            <StyledLink>Source Code</StyledLink>
                        </div>
                    )}
                </StyledProject>
            ))}
        </div>
    );
}

export default App;
