import projects from '../projects.json'
import Project from '../components/Project'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ProjectPage() {

    const projectData = projects.projects;

    return (
        <>
            <Header/>

            {projectData.map((item, index) => (
                <Project key={index} details={item}/>
            ))}

            <Footer/>
        </>
    )
}

export default ProjectPage;