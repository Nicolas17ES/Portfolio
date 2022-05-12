import './Mobile.css'
import { ReactComponent as MobileBackground }  from '../../../assets/foundIt/mobile2.svg'


function Mobile({image}) {
    return (
        <div className="mobile-page">
            <MobileBackground className="mobile-svg" style={{ backgroundImage: `url(${image})`}}/>
        </div>
    )
}

export default Mobile
