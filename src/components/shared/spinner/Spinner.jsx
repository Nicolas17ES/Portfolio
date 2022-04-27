import spinnerGif from '../../assets/load3gif.gif'
import './Spinner.css'

function Spinner() {
    return (
            <img className="spinner" src={spinnerGif} alt="loading..."/>  
    )
}

export default Spinner
