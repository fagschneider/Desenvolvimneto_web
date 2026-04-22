import Header from "./componentes/Header"
import Navigation from "./componentes/Navigation"
import Article from "./componentes/Article"
import Sidebar from "./componentes/Sidebar"
import Footer from "./componentes/Footer"


function App() {
  const post = {
    titulo: "Descobrindo as Praias do Nordeste",
    data: "01 de março de 2026",
    conteudo1: "As praias do Nordeste são conhecidas pelas águas quentes, belas paisagens e clima ensolarado durante quase todo o ano.",
    conteudo2: "Além disso, oferecem diversidade de ambientes, cultura rica e ótima gastronomia, tornando a região muito atrativa para o turismo.",
    imagem: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2020/05/10-Melhores-Praias-do-Nordeste-Brasileiro-Capa.jpg",
    alt: "Praia porto de galinhas em pernambuco",
    legenda: "Porto de Galinhas, Pernambuco"
  }


  const postsRelacionados = [
    'Melhores lugares do Japão',
    'Lugares para conhecer em Konoha',
    'Principais países para visitar',
  ]


  return (
    <div className="app">
      <Header />
      <Navigation />
      <Article
        titulo={post.titulo}
        autor={post.autor}
        data={post.data}
        conteudo1={post.conteudo1}
        conteudo2={post.conteudo2}
        imagem={post.imagem}
        alt={post.alt}
        legenda={post.legenda}
      />
      <Sidebar posts={postsRelacionados} />
      <Footer />
    </div>
  )
}


export default App



