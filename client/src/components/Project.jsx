function Project(props) {
    const { title, description, skills, files } = props.details

    return (
        <div>
            <h2>{title}</h2>
            <ol>
                {skills.map((item, index) => (
                    <li>{item}</li>
                ))}
            </ol>
            <ol>
                {files.map((item, index) => (
                    <li>
                        <a href={`/project-files/${item}`} download>
                            Download {title}
                        </a>
                    </li>
                ))}
            </ol>
            <p>{description}</p>
        </div>
    )
}

export default Project;