function Career(props) {

    const career = props.career;

    return (
        <section className='career'>
            <h2 className='career-title'>{career.title}</h2>
            <section className='side-by-side'>
                <section className='top-bottom'>
                    <h2 className='list-title'>Skills</h2>
                    <ol className='bullet-list'>
                        {career.skills.map((item, index) => (
                            <li className='bullet-list-item' key={index}>{item}</li>
                        ))}
                    </ol>
                </section>
                <section className='bullet-list-box'>
                    <h2 className='list-title'>Coursework</h2>
                    <ol className='bullet-list'>
                        {career.courses.map((item, index) => (
                            <li className='bullet-list-item' key={index}>{item}</li>
                        ))}
                    </ol>
                </section>
            </section>
        </section>
    )
}

export default Career;