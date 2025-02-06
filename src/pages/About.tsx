const About = () => {
    return (

    <div>
        <div className="container col-6 border rounded-3 border-dark p-3">
            <h1 className="text-center fw-bold mb-3">Tony Souza</h1>
            <h2 className="text-center fw-bold"><em>Desenvolvedor FRONTEND</em></h2>
            <hr className="my-4" />
            <p className="fs-5 mt-4">
                Sou um desenvolvedor web apaixonado por tecnologia, com dois anos de experiência sólida como freelancer. {'\n'}
                Atuando no desenvolvimento Frontend, utilizo tecnologias modernas como <strong>HTML5</strong>, <strong>CSS3</strong>, {'\n'}
                <strong>Bootstrap</strong>, <strong>React</strong>, <strong>Git</strong> e <strong>Typescript</strong>. {'\n'}
                Crio interfaces dinâmicas, responsivas e eficientes, focadas na melhor experiência do usuário.
            </p>
        </div>
        <div className="container col-6 mt-3 border rounded-3 border-dark p-3">
            <h2 className="text-center fw-bold">Educação</h2>
            <hr className="my-4" />
            <p className="fs-5 mt-4">
                    Centro Universitário Estácio de Santa Catarina <br />{'\n'}
                    Polo Centro Barreira - CE <br />{'\n'}
                    Curso de Análise e Desenvolvimento de Sistemas <br />{'\n'}
                    <i>Novembro 2022 - Março 2025</i>
            </p>
        </div>
    </div>

    )
}

export default About;