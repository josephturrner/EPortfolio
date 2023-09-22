import socials from '../socials.json';

function HeaderTwo() {

    const { git, gmail, linkedin } = socials.socials

    return (
        <section className='new-header'>
            <section className='new-header-container left'>
                <img src='/icons/portfolio-icon.svg' alt='' className='new-header-logo'/>
            </section>
            <h2 className='new-header-title'>Joseph Turner</h2>
            <section className='new-header-container right'>
                <a href={`mailto: ${gmail}`} className='header-link'>
                    <img src='/icons/gmail-logo.svg' alt='' className='new-header-logo'/>
                </a>
                <a href={`${linkedin}`} className='header-link'>
                    <img src='/icons/linkedin-logo.svg' alt='' className='new-header-logo'/>
                </a>
                <a href={`${git}`} className='header-link'>
                    <img src='/icons/git-logo.svg' alt='' className='new-header-logo'/>
                </a>
            </section>
        </section>
    )
}

export default HeaderTwo;