import "../styles/projectCard.css";

interface ProjectCardProps{
    imagem: string;
    titulo: string;
    descricao: string;
}

export default function projectCard({imagem, titulo, descricao}: ProjectCardProps){

    return(
        <div className="project-card">
            <img src={imagem} alt={titulo} />

        <div className="project-content">
            <h3>
                {titulo}
            </h3>
            <p>
                {descricao}
            </p>
        </div>    
        </div>
    );
}