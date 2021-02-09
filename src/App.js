import projects from './projectData';

function App() {
    return (
        <div>
            {projects.map((p, i) => (
                <div>
                    <img src={'/images/' + p.image} />
                </div>
            ))}
        </div>
    );
}

export default App;
