import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <section className="footer-container">
                <div className="footer-row">
                    <div className="f-left">
                        <span>
                            Stay In Touch
                        </span>
                        <p>Don't be a stranger and start following us :)</p>
                    </div>
                    <div className="f-right">
                        <ul>
                            <li><a> <img src="../images/Discord.png" alt="Discord" /> </a></li>
                            <li><a> <img src="../images/Instagram.png" alt="Instagram" /> </a></li>
                            <li><a> <img src="../images/Facebook.png" alt="Facebook" /> </a></li>
                            <li><a> <img src="../images/Dribbble.png" alt="Dribbble" /> </a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
