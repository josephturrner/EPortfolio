function Card(props) {

    const information = props.info;

    return (
        <section className='card'>
            <section className='side-by-side even'>
                {information.logo && (
                    <img src={information.logo} alt='' className='item-logo'/>
                )}
                <h2 className='card-title'>{information.title}</h2>
                {information.git ? (
                    <a className='item-link' href={information.git}>
                        <img src='/icons/git-logo.svg' className='item-logo' alt=''/>
                    </a>
                ) : (
                    information.logo && (
                        <img src={information.logo} alt='' className='item-logo'/>
                    )
                )}
            </section>
            <section className='card-summary top-bottom'>
                <section className='box-list'>
                    {information.skills.map((item, index) => (
                        <p className='box-list-item' key={index}>
                            {item}
                        </p>
                    ))}
                </section>
                <p className='card-description'>
                    {information.description}
                </p>
            </section>
        </section>
    )
}

export default Card;