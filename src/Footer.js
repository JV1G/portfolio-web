import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>&copy; {currentYear} JV1G. All rights reserved.</footer>
    );
  }
  
  export default Footer;