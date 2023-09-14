import './Header.css';
import { FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <header>
            <button className="theme-btn"><FaMoon /></button>
            <button className={`menu-btn ${isOpen ? 'hamburger-is-open' : ''}`} onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className='content-container'>
                <nav>
                    <ul className={`${isOpen ? 'show' : ''}`}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
  }
  
  export default Header;