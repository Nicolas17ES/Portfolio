import './GameTitle.css'

function GameTitle({title}) {
   
    

    return (
        <div className="game-title">
           <div class="circle"></div>
            <h1 className="title-h1"><span className="title-text">{title}</span></h1>
        </div>
    )
}

export default GameTitle
