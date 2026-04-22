function Sidebar(props){
    return(
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        {props.posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </aside>
    )
}

export default Sidebar