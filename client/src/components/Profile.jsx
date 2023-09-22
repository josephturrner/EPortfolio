import Card from './Card';
import CareerPath from './CareerPath';

function Profile(props) {

    const homepage = props.homepage;
    
    return (
        <section className='profile'>
            <section className='top-bottom'>
                <section className='profile-body'>
                    <section className='profile-summary'>
                        <section className='top-bottom careers'>
                            {homepage.careerpaths.map((item, index) => (
                                <CareerPath info={item} key={index} color={index}/>
                            ))}
                        </section>
                    </section>
                    <img className='profile-photo' src='/icons/wentworth-logo.svg' alt=''></img>
                </section>
            </section>
        </section>
    )
}

export default Profile;