import React from "react";

function Footer() {
    
    const name = 'Thameem';
    const email = 'thameem123@gmail.com';
    const currentYear = 2025;
    return (
        <footer className="site-footer">
            <p>© {currentYear} {name} — <a href={`mailto:${email}`}>{email}</a></p>
        </footer>
    );
}

export default Footer;
