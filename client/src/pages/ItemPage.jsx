import Item from '../components/Item'

function ItemPage(props) {

    const informationData = props.info;

    return (
        <div className='page'>
            {informationData.map((item, index) => (
                <Item key={index} details={item} bottom={(index === informationData.length-1)}/>
            ))}
        </div>
    )
}

export default ItemPage;