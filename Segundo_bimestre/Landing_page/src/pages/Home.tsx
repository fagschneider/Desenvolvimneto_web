import heroRectangleOne from "../assets/images/rectangleOne.png";
import heroRectangleTwo from "../assets/images/rectangleTwo.png";
import coberturaMetalica from "../assets/images/coberturametalica.jpg";
import escadaMetalica from "../assets/images/escadametalica.jpg";
import estruturaMetalica from "../assets/images/estruturametalica.jpg";
// import fundo from "../assets/images/fundo.jpg"
import teste from "../assets/images/teste.png"
import pessoa1 from "../assets/images/pessoa1.jpg"
import pessoa2 from "../assets/images/pessoa2.jpg"
// import pessoa3 from "../assets/images/pessoa3;.jpg"
// import hero from "../assets/images/hero.jpg"
// import star from "../assets/svgs/star.svg"
import wrench from "../assets/svgs/wrench.svg"
import factory from "../assets/svgs/factory.svg"
// import starOuter from "../assets/svgs/starouter.svg"
// import perfil from "../assets/images/perfil.webp";
import drafting from "../assets/svgs/drafting.svg"
import logo from "../assets/svgs/logo.svg";
import fechar from "../assets/svgs/fechar.svg";
import menu from "../assets/svgs/menu.svg";
import anterior from "../assets/svgs/anterior.svg";
import proximo from "../assets/svgs/proximo.svg";
// import check from "../assets/svgs/check.svg"
import {solutionCard} from "../components/solutionCard"
import  testimonialsCard from "../components/testimonialsCard";
import button from "../components/button";
import { useState } from "react";
import projectCard from "../components/projectCard";
import "../styles/solutionCard.css"
import "../styles/testimonials.css"
import "../styles/button.css"
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/projects.css";
import "../styles/projectCard.css";
import "../styles/testimonialsCard.css"
import "../styles/contact.css"
import "../styles/footer.css"


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const Button = button;
    const SolutionCard = solutionCard;
    const TestmonialCard = testimonialsCard;
    const ProjectCard = projectCard;

    const projects = [
        {
            imagem: coberturaMetalica,
            titulo: "Cobertura Metálica",
            descricao: "Cobertura metálica para galpão."
        },
        {
            imagem: estruturaMetalica,
            titulo: "Estrutura Metálica",
            descricao: "Fabricação de estrutura metálica industrial."
        },
        {
            imagem: escadaMetalica,
            titulo: "Escada Metálica",
            descricao: "Escada metálica produzida sob medida."
        }
    ]

    const [currentProject, setCurrentProject] = useState(0);

    const nextProject = () =>{
        
        setCurrentProject(
        currentProject === projects.length - 1 ? 0 : currentProject + 1
        )
    }

    const previousProject = () => {

    setCurrentProject(
        currentProject === 0 ? projects.length - 1 : currentProject - 1
    );

}

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img className="logo" src={logo} alt="Logo ArtsMetal" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#projects">Projetos</a>
                            </li>
                            <li>
                               <a href="#contact">Contato</a>
                            </li>
                        </ul>    
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se"/>
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#projects">Projetos</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={fechar} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>

                        
            </header>

{/* --------------------------------------------------------------HERO------------------------------------------------------------- */}
            
            <section id="hero">
                
                <span className="desktop-only">
                    <img className="fundo" src={heroRectangleTwo} alt="" />
                </span> 
                 <img src={heroRectangleOne} alt="Retangulo dois tela inicial" />
               
                {/* <span>
                    <img className="fundo" src={hero} alt="" />
                </span>  */}

                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    
                    <h1>
                        Precisão, resistência e qualidade em cada projeto metálico.
                    </h1>

                    <p>
                        Da fabricação à entrega, desenvolvemos soluções que atendem às suas necessidades.
                    </p>

                    <div className="flex gap-1">
                        <span>
                            <Button text="Cadastre-se"/>
                        </span>
                        <span className="desktop-only">
                            < Button text="Veja Mais" secondary />
                        </span>
                    </div>
                </div>
                
            </section>

            {/* ----------------------------------------------------SOLUTIONS------------------------------------------------------ */}

            <section className="container" id="solution">
                        <header>
                            <span>
                                <h2>
                                    Soluções
                                </h2>
                                <span className="desktop-only">
                                    <h2>
                                    Nossas Especialidades
                                    </h2>
                                </span>
                            </span>

                            <p>
                                A <strong>Arts Metal</strong> oferece soluções metalúrgicas completas, desde a fabricação de peças até estruturas metálicas sob medida, sempre com qualidade, precisão e compromisso com nossos clientes.
                            </p>
                        </header>

                        <section className="even-columns">
                            
                            < SolutionCard
                                icone={wrench}
                                titulo="Corte e Dobra"
                                descricao="Realizamos cortes e dobras com precisão para atender às especificações e exigências de cada projeto."
                            />
                            < SolutionCard
                                icone={factory}
                                titulo="Manutenção e Instalação Industrial"
                                descricao="Executamos a instalação, manutenção e adequação de máquinas e equipamentos industriais."
                            />  
                            < SolutionCard
                                icone={drafting}
                                titulo="Fabricação Sob Medida"
                                descricao="Desenvolvemos peças, estruturas metálicas e soluções personalizadas para cada cliente."
                            />
                         
                        </section>
            </section>
                        
{/* ----------------------------------------------------------Testimonials--------------------------------------------------------- */}
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>

                        <h2>
                            O que nossos clientes dizem
                        </h2>
                    </span>
                        <p>
                            Conheça a experiência de empresas e pessoas que confiaram em nossos serviços metalúrgicos.
                        </p>
                    </header>

                    <section className="carousel">
                        <div className="carousel-content">
                            <TestmonialCard                               
                                foto={pessoa1}
                                nome="Samuel"
                                comentario="Contratamos a Arts Metal para a fabricação e instalação da estrutura metálica do nosso galpão. O serviço foi entregue dentro do prazo e com excelente acabamento. Recomendo pela qualidade e profissionalismo."
                                stars={4}
                                />
                                <TestmonialCard                                
                                foto={pessoa2}
                                nome="Carlos"
                                comentario="Precisávamos de uma escada metálica sob medida e o resultado superou nossas expectativas. Atendimento atencioso, execução impecável e materiais de primeira qualidade"
                                stars={4}
                                />    
                                <TestmonialCard                                
                                foto={teste}
                                nome="Roberta"
                                comentario="A equipe demonstrou muita experiência durante todo o projeto. Desde o orçamento até a instalação da cobertura metálica, tudo foi realizado com segurança, organização e eficiência."
                                stars={4}
                                /> 


                                <TestmonialCard                               
                                foto={pessoa1}
                                nome="Samuel"
                                comentario="Contratamos a Arts Metal para a fabricação e instalação da estrutura metálica do nosso galpão. O serviço foi entregue dentro do prazo e com excelente acabamento. Recomendo pela qualidade e profissionalismo."
                                stars={4}
                                />
                                <TestmonialCard                                
                                foto={pessoa2}
                                nome="Carlos"
                                comentario="Precisávamos de uma escada metálica sob medida e o resultado superou nossas expectativas. Atendimento atencioso, execução impecável e materiais de primeira qualidade"
                                stars={4}
                                />    
                                <TestmonialCard                                
                                foto={teste}
                                nome="Roberta"
                                comentario="A equipe demonstrou muita experiência durante todo o projeto. Desde o orçamento até a instalação da cobertura metálica, tudo foi realizado com segurança, organização e eficiência."
                                stars={4}
                                />   

                            </div>
                    </section>
            </section>
                        
                        {/* ---------------------------------------- PROJECTS -----------------------------------------------------*/}

            <section id="projects" className="container">
                <header>
                    <p className="desktop-only">
                        Projetos Realizados
                    </p>

                    <h2>Conheça Nossos Trabalhos </h2>

                    <p className="projects-description">
                        Cada projeto representa nosso compromisso
                        com qualidade, precisão e durabilidade.
                    </p>
                    </header>

                    <section className="project-carousel">

                        <div className="mobile-project">

                            <button className="carousel-btn" onClick={nextProject}>
                                <img src={anterior} alt="Próximo projeto"/>
                            </button>

                            <ProjectCard
                                imagem={projects[currentProject].imagem}
                                titulo={projects[currentProject].titulo}
                                descricao={projects[currentProject].descricao}
                            />
                            
                            <button className="carousel-btn" onClick={previousProject}>
                                <img src={proximo} alt="Próximo projeto"/>
                            </button>

                        </div>   
                            
                    
                             

                        <div className="desktop-only">
                            <div className="project-desktop">
                                <button className="carousel-btn" onClick={nextProject}>
                                    <img src={anterior} alt="Próximo projeto"/>
                                </button>
                                <ProjectCard
                                imagem={projects[currentProject].imagem}
                                titulo={projects[currentProject].titulo}
                                descricao={projects[currentProject].descricao}
                                />
                                
                                <ProjectCard
                                    imagem={projects[(currentProject + 1)% projects.length].imagem}
                                    titulo={projects[(currentProject + 1)% projects.length].titulo}
                                    descricao={projects[(currentProject + 1)% projects.length].descricao}
                                />
                                <ProjectCard
                                    imagem={projects[(currentProject + 2)% projects.length].imagem}
                                    titulo={projects[(currentProject + 2)% projects.length].titulo}
                                    descricao={projects[(currentProject + 2)% projects.length].descricao}
                                />
                                <button className="carousel-btn" onClick={previousProject}>
                                    <img src={proximo} alt="Próximo projeto"/>
                                </button>
                            </div>
                         </div>



                    </section>

                        
            </section>



             {/* ---------------------------------------- CONTATO -----------------------------------------------------*/}

            <section id="contact" className="container">


                <header>

                    <p>Fale Conosco</p>

                    <h2>
                        Entre em contato
                    </h2>

                    <span>
                        Solicite seu orçamento sem compromisso. Nossa equipe está pronta
                        para desenvolver soluções metálicas sob medida com qualidade,
                        precisão e atendimento especializado.
                    </span>
                </header>

                <form>

                    <input
                        type="email"
                        placeholder="Seu e-mail"
                    />

                    <textarea
                        placeholder="Descreva seu projeto ou necessidade"
                    />

                    <span>
                        <Button text="Enviar" />
                    </span>

                </form>


            </section> 

            <footer id="footer">

    <div className="container footer-content">

        <div className="footer-brand">
            <h3>Arts Metal</h3>

            <div className="social-icons">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">WhatsApp</a>
            </div>
        </div>

        <div className="footer-column">
            <h4>Empresa</h4>

            <a href="#">Sobre Nós</a>
            <a href="#solution">Serviços</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
        </div>

        <div className="footer-column">
            <h4>Serviços</h4>

            <a href="#">Estruturas Metálicas</a>
            <a href="#">Coberturas</a>
            <a href="#">Escadas Metálicas</a>
            <a href="#">Fabricação Sob Medida</a>
        </div>

        <div className="footer-column">
            <h4>Recursos</h4>

            <a href="#">Solicitar Orçamento</a>
            <a href="#">Atendimento</a>
            <a href="#">Área de Clientes</a>
            <a href="#">Localização</a>
        </div>

    </div>

    <div className="footer-bottom">
        <p>
            ©2026 Arts Metal - Todos os direitos reservados.
        </p>
    </div>

</footer>
                                
                        
{/* <div className="espacamento"> */}

{/* </div> */}


        </>
    )
}