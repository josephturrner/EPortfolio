import projects from '../projects.json'
import Project from '../components/Project'

function ProjectPage() {

    const projectData = projects.projects;

    return (
        <div className='projects'>

            {projectData.map((item, index) => (
                <Project key={index} details={item}/>
            ))}

        </div>
    )
}

export default ProjectPage;