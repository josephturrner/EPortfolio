import projects from '../projects.json'
import Project from '../components/Project'

function ProjectPage() {

    const projectData = projects.projects;

    return (
        <div className='page'>
            {projectData.map((item, index) => (
                <Project key={index} details={item} bottom={(index === projectData.length-1)}/>
            ))}
        </div>
    )
}

export default ProjectPage;