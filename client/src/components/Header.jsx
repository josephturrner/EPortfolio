import socials from '../socials.json';

function Header() {

    const { git, gmail, linkedin } = socials.socials

    return (
        <header className='header'>
            <img src='/icons/portfolio-icon.svg' alt='' className='item-logo'/>
            {/* <div className='header-title'>
                <h2 className='header-name'>Joseph Turner</h2>
                <p className='header-job'>Software Engineer</p>
            </div> */}
            <section className='header-links'>
                <a href="/" className='header-link'>Home</a>
                <a href="/projects" className='header-link'>Projects</a>
                <a href="/experience" className='header-link'>Experience</a>
                <a href="/education" className='header-link'>Education</a>
            </section>
            <section className='header-contacts'>
                <a href={`mailto: ${gmail}`} className='header-link'>
                    <img src='/icons/gmail-logo.svg' alt='' className='item-logo header'/>
                </a>
                <a href={`${linkedin}`} className='header-link'>
                    <img src='/icons/linkedin-logo.svg' alt='' className='item-logo header'/>
                </a>
                <a href={`${git}`} className='header-link'>
                    <img src='/icons/git-logo.svg' alt='' className='item-logo header'/>
                </a>
            </section>
        </header>
    )
}

export default Header;