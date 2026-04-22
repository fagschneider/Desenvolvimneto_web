function Article(props){
    return(
    <article>
      <h2>{props.titulo}</h2>
      <p><strong>Autor:</strong> {props.autor}</p>
      <time>{props.data}</time>
      <p>{props.conteudo1}</p>
      <p>{props.conteudo2}</p>

      <figure>
        <img src={props.imagem} alt={props.alt} />
        <figcaption>{props.legenda}</figcaption>
      </figure>
    </article>
    )
}

export default Article