import star from "../assets/svgs/star.svg"
import starOuter from "../assets/svgs/starouter.svg"
import "../styles/testimonialsCard.css"



interface TestimonialCardProps {
  foto: string;
  nome: string;
  comentario: string;
  stars: number;
}



export default function testimonialsCard ({foto, nome, comentario, stars}:TestimonialCardProps){
    
    const starArray = Array.from({ length: 5}, (_, index) => index < stars);

    return(


        <div className="testimonials-card">
            <img src={foto} alt="foto de perfil"  />

            <span className="testimony">
                <p>{comentario}</p>
            </span>
            <span className="rating">
                {starArray.map((isFilled, index)=>(
                    <img 
                        key={index}
                        src={isFilled ? star : starOuter}                   
                        alt="estrela"
                        width={22} height={20}
                     />
                ))}
            </span>
            <span className="names">
                <p>
                    {nome}
                </p>
            </span>
        </div>
    )
}