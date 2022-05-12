import './Service.css'

function Service({data}) {
    return (
        <div className="flights" style={{backgroundImage: `url(${data.image})` }}>
            <span className="tag-news tag-teal">{data.teal}</span>
            <button className="button-74">{data.button}</button>
            <div className="plus radius"></div>
 </div >
    )
}

export default Service
