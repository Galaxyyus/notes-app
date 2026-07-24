import './Footer.css';

function Footer() {
    let date = new Date().toDateString();

    return (
        <footer>
            {date}
        </footer>
    );
}

export default Footer;