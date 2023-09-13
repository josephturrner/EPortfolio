import Experience from '../components/Experience'
import experience from '../experience.json'


function ExperiencePage() {

    const experienceData = experience.experience;

    return (
        <div className='page'>
            {experienceData.map((item, index) => (
                <Experience key={index} details={item} bottom={(index === experienceData.length-1)}/>
            ))}
        </div>
    )
}

export default ExperiencePage;