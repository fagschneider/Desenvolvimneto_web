import "../styles/solutionCard.css"

export function solutionCard({icone, titulo, descricao}){
    return(
        <div className="solution-card">
            
            <span>
            <img src={icone} alt={titulo} width={64} height={64} />
            </span>

            <div>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <hr />
            </div>

        </div>
    );

}