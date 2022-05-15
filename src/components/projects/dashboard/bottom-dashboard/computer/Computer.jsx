import './Computer.css'

import { ReactComponent as ComputerBackground }  from '../../../../assets/dashboard/computer.svg'

function Computer({image}) {
    return (
        <div className="computer-page">
            <ComputerBackground className="computer-svg" style={{ backgroundImage: `url(${image})`}}/>
        </div>
    )
}

export default Computer
