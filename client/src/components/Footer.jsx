import socials from '../socials.json';

function Footer() {

    const { git, gmail, linkedin, phone } = socials.socials;

    return (
        <footer className='footer'>
            <section className='footer-links'>
                <section className='text-box'>
                    <h2 className='text-box-title'>Contact</h2>
                    <p className='text-box-text'>Gorham, NH</p>
                    <p className='text-box-text'>{phone}</p>
                    <p className='text-box-text'>{gmail}</p>
                </section>
                <section className='footer-contacts'>
                    <a href={`mailto: ${gmail}`} className='item-link'>
                        <img className='item-logo footer' alt="" src='/icons/gmail-logo.svg'/>
                    </a>
                    <a href={`${linkedin}`} className='item-link'>
                        <img className='item-logo footer' alt="" src='/icons/linkedin-logo.svg'/>
                    </a>
                    <a href={`${git}`} className='item-link'>
                        <img className='item-logo footer' alt="" src='/icons/git-logo.svg'/>
                    </a>
                </section>
            </section>
        </footer>
    )
}

export default Footer;