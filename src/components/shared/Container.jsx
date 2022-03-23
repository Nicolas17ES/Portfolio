import FeedbackContext from '../../context/feedback/FeedbackContext'
import {useState, useContext, useRef} from 'react'

function Container({children}) {
    const {blurry} = useContext(FeedbackContext);
    const containerRef = useRef();

    if(blurry === true){
        containerRef.current.classList.add("blurry-body")
    } else {
        containerRef.current?.classList?.remove("blurry-body")
    }

    return (
        <div ref={containerRef} className="fake-container">
            {children}
        </div>
    )
}

export default Container


// import {useState, useContext, useRef} from 'react'
// import FeedbackContext from '../../context/feedback/FeedbackContext'

// function DivContainer({children}) {
//     const {blurry} = useContext(FeedbackContext);
//     const containerRef = useRef();

//     return (
//         <div ref={containerRef} className="container">
//             {children}
//         </div>
//     )
// }

// export default DivContainer