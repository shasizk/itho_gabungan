import Link from "next/link"

export default function Navbar() {
    const navStyle = {
        backgroundColor: '#0d1b2a',
        padding: '1rem',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between', // Space between logo and menu
        alignItems: 'center',
        position: 'fixed', // Fixed at the top
        top: 0,
        width: '100%',
        zIndex: 1000,
    };

    const logoStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#facc15',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    };

    const ulStyle = {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        gap: '1rem',
    };

    const liStyle = {
        display: 'inline',
    };

    const linkStyle = {
        color: '#e5e7eb',
        fontFamily: 'sans-serif',
        textDecoration: 'none',
        fontSize: '1.2rem',
        transition: 'color 0.3s',
    };

    const linkHoverStyle = {
        color: '#00bcd4',
    };

    return (
        <nav style={navStyle}>
            <div style={logoStyle}>
                <img 
                    src="/image/logo.png" 
                    alt="Logo" 
                    style={{ height: '2rem' }} 
                />
                shaisasa
            </div>
            <ul style={ulStyle}>
                <li style={liStyle}>
                    <Link
                        href="/"
                        style={linkStyle}
                        onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                    >
                        Home
                    </Link>
                </li>
                <li style={liStyle}>
                    <a
                        href="#about"
                        style={linkStyle}
                        onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                    >
                        About
                    </a>
                </li>
                <li style={liStyle}>
                    <a
                        href="#features"
                        style={linkStyle}
                        onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                    >
                        Features
                    </a>
                </li>
                <li style={liStyle}>
                    <Link
                        href="/books"
                        style={linkStyle}
                        onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                    >
                        Book Collection
                    </Link>
                </li>
                <li style={liStyle}>
                    <a
                        href="#contact"
                        style={linkStyle}
                        onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}