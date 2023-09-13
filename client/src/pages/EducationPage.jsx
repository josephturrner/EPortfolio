import Education from '../components/Education'
import education from '../education.json'

function EducationPage() {

    const educationData = education.education;

    return (
        <div className='page'>
            {educationData.map((item, index) => (
                <Education key={index} details={item} bottom={(index === educationData.length-1)}/>
            ))}
        </div>
    )
}

export default EducationPage;