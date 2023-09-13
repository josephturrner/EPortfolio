function Header() {
    return (
        <header className='header'>
            <div className='header-logo-title'>
                <img src='/icons/portfolio-icon.svg' alt='' className='item-logo'/>
                <div className='header-title'>
                    <h2 className='header-name'>Joseph Turner</h2>
                    <p className='header-job'>Software Engineer</p>
                </div>
            </div>
            <ol className='header-links'>
                <a href="/" className='header-link'>Home</a>
                <a href="/projects" className='header-link'>Projects</a>
                <a href="/experience" className='header-link'>Experience</a>
                <a href="/education" className='header-link'>Education</a>
            </ol>
        </header>
    )
}

export default Header;