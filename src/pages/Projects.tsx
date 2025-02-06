const Projects = () => {
    return (
        <div>
            <h2>Projetos</h2>
            <div className="row" id="projetos">
                <div className="col-12 col-md-6 mb-4">
                    <div className="card">
                        <img src="path-to-image" alt="Super Lili" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Super Lili</h5>
                            <p className="card-text">Descrição do projeto Super Lili.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mb-4">
                    <div className="card">
                        <img src="path-to-image" alt="Coinfor" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Coinfor</h5>
                            <p className="card-text">Descrição do projeto Coinfor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;