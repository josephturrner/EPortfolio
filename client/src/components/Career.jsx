function Career(props) {

    const career = props.career;

    return (
        <section className='career'>
            <h2 className='career-title'>{career.title}</h2>
            <section className='career-summary side-by-side'>
                <section className='career-list'>
                    {career.skills.map((item, index) => (
                        <p className='career-list-item' key={index}>
                            {item}
                        </p>
                    ))}
                </section>
                <p className='career-description'>
                    {career.description}
                </p>
            </section>
        </section>
    )
}

export default Career;