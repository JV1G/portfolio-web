import './Content.css'
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

const Content = () => {
    return (
        <main>
            <section id="home" className="home-section">
                <div className = "link-buttons">
                    <a href="https://www.linkedin.com/in/jok%C5%ABbas-vigelis-391bbb290/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
                </div>
                <div className="content-container">
                    <div className="container-left-side">
                        <div className="card">
                            <div class="greeting-container">
                                <span class="wave-icon">👋</span>
                                <h1>I'm Jokūbas Vigelis</h1>
                            </div>
                        </div>
                        <div className="card">
                            <p>FULL-STACK WEB DEVELOPER / SOFTWARE ENGINEER</p>
                            <p>B.TECH - SOFTWARE ENGINEERING</p>
                        </div>
                        <div className="card">
                            <p>BRAD IS THE NAME OF THE CAT; CLICK ON HIM.</p>
                            <p>HE WILL TAKE YOU TO MY RESUME.</p>
                        </div>
                    </div>
                    <div className="container-right-side">
                        <div className="card">
                            <img src="./images/about-me-cat.gif" alt="A cat looking towards the about me text"></img>
                        </div>
                    </div>
                </div>
                <div className="nav-circles">
                    <a href="#home" className="nav-circle"></a>
                    <a href="#projects" className="nav-circle"></a>
                    <a href="#skills" className="nav-circle"></a>
                    <a href="#contact" className="nav-circle"></a>
                </div>
            </section>
            <section id="projects" className="projects-section">
                <div className = "link-buttons">
                    <a href="https://www.linkedin.com/in/jok%C5%ABbas-vigelis-391bbb290/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
                </div>
                <div className="content-container">
                    <div class="container-top">
                        <h2>My Creative <span class="accent-span">Portfolio</span> Section</h2>
                    </div>
                    <div class="container-bottom">
                        <p>Coming soon...</p>
                    </div>
                </div>
            </section>
            <section id="skills" className="skills-section">
                <div className = "link-buttons">
                    <a href="https://www.linkedin.com/in/jok%C5%ABbas-vigelis-391bbb290/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
                </div>
                <div className="content-container">
                    <div class="container-top">
                        <h2>Skills <span class="accent-span">&</span> Experiences</h2>
                    </div>
                    <div class="container-bottom">
                        <p>Coming soon...</p>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact-section">
                <div className = "link-buttons">
                    <a href="https://www.linkedin.com/in/jok%C5%ABbas-vigelis-391bbb290/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
                </div>
                <div className="content-container">
                    <div class="container-top">
                        <h2>Say <span class="accent-span">Hello</span> To Me</h2>
                    </div>
                    <div class="container-bottom">
                        <p>Coming soon...</p>
                    </div>
                </div>
            </section>
        </main>
    );
  }
  
  export default Content;