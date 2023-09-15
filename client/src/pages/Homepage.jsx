import Profile from '../components/Profile'
import Career from '../components/Career'
import homepage from '../homepage.json'
import socials from '../socials.json'

function HomePage() {

    return(
        <div className='page'>
            <Profile profile={homepage.profile} socials={socials.socials}/>
            <section className='side-by-side'>
                {homepage.careerpaths.map((item, index) => (
                    <Career career={item} key={index}/>
                ))}
            </section>
            <section className='side-by-side'>
                {/* {homepage.experience.map((item, index) => (
                    
                ))} */}
            </section>
        </div>
    )
}

export default HomePage;