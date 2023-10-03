function Contact(props) {

    const contact = props.contact;

    return (
        <section className='contact'>
            <div className='row'>
                <div className='contact-item'>
                    <img className='contact-logo bottom telephone' src='/icons/telephone.svg' alt=''/>
                    <p>{contact.phone}</p>
                </div>
                <img className='contact-pic' src={contact.photo} alt=''/>
                <div className='contact-item'>
                    <img className='contact-logo bottom globe' src='/icons/globe.svg' alt=''/>
                    <p>{contact.location}</p>
                </div>
            </div>
            <section className='row'>
                <a href={`mailto: ${contact.gmail}`} className='link-item'>
                    <img src='/icons/gmail-logo.svg' alt='' className='contact-logo bottom'/>
                </a>
                <a href={`${contact.linkedin}`} className='link-item'>
                    <img src='/icons/linkedin-logo.svg' alt='' className='contact-logo bottom'/>
                </a>
                <a href={`${contact.git}`} className='link-item'>
                    <img src='/icons/git-logo.svg' alt='' className='contact-logo bottom'/>
                </a>
            </section>
        </section>
    )
}

export default Contact;