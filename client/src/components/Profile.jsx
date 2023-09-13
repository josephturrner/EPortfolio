function Profile(props) {

    const profile = props.profile;
    const { git, linkedin, gmail } = props.socials;
    
    return (
        <section className='profile'>
            <section className='top-bottom'>
                <section className='profile-title'>
                    <h2 className='header-name home'>{profile.title}</h2>
                    <section>
                        <a href={`mailto: ${gmail}`} className='item-link'>
                            <img src='/icons/gmail-logo.svg' alt='' className='item-logo'/>
                        </a>
                        <a href={`${linkedin}`} className='item-link'>
                            <img src='/icons/linkedin-logo.svg' alt='' className='item-logo'/>
                        </a>
                        <a href={`${git}`} className='item-link'>
                            <img src='/icons/git-logo.svg' alt='' className='item-logo'/>
                        </a>
                    </section>
                </section>
                <section className='profile-body'>
                    <section className='profile-photo-container'>
                        <img className='profile-photo' src='/icons/wentworth-logo.svg' alt=''></img>
                    </section>
                    <section className='profile-summary'>
                        <section className='profile-description'>
                            {profile.description}
                        </section>
                        <section className='profile-box'>
                            <section className='side-by-list'>
                                <h2 className='list-title home'>Skills</h2>
                                <ol className='box-list home'>
                                    {profile.skills.map((item, index) => (
                                        <li className='box-list-item' key={index}>{item}</li>
                                    ))}
                                </ol>
                            </section>
                            <div className='list-separator'/>
                            <section className='side-by-list'>
                                <h2 className='list-title home'>Tech</h2>
                                <ol className='box-list home'>
                                    {profile.technology.map((item, index) => (
                                        <li className='box-list-item'>{item}</li>
                                    ))}
                                </ol>     
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Profile;