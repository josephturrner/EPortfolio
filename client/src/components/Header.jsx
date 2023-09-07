function Header() {
    return (
        <header className='header'>
            <div className='header-card'>
                <h2 className='header-name'>Joseph Turner</h2>
                <p className='header-job'>Software Engineer</p>
            </div>
            <ol className='header-links'>
                <li>
                    <a href="/" className='header-link'>Home</a>
                </li>
                <li>
                    <a href="/projects" className='header-link'>Projects</a>
                </li>
                <li>
                    <a href="/experience" className='header-link'>Experience</a>
                </li>
                <li>
                    <a href="/contact" className='header-link'>Contact</a>
                </li>
            </ol>
        </header>
    )
}

export default Header;