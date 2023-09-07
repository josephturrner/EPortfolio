import Experience from '../components/Experience'
import '../styles/experiencepage.css'
import experience from '../experience.json'


function ExperiencePage() {

    const experienceData = experience.experience;

    return (
        <div className='experience'>
            {experienceData.map((item, index) => (
                <Experience key={index} even={index%2===0} details={item}/>
            ))}
        </div>
    )
}

export default ExperiencePage;