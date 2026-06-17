import "../styles/solutionCard.css"

interface SolutionCardProps {
  icone: string;
  titulo: string;
  descricao: string;
}

export function solutionCard({
  icone,
  titulo,
  descricao,
}: SolutionCardProps) {
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