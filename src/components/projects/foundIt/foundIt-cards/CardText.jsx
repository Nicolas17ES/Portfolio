import './FoundCard.css'

function CardText({title, text}) {
    return (
        <div className="text">
            <h3 className="image-title">{title}</h3>
            <p className="image-text">{text}</p>
        </div>
    )
}

export default CardText
