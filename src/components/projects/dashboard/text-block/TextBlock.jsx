import './TextBlock.css'

function TextBlock({data}) {
    return (
        <div className="text-services">
            <p> {data.text}</p>
        </div>
    )
}

export default TextBlock
