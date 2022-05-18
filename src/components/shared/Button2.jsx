import PropTypes from 'prop-types'


function Button2({text, color}) {
   
    return (
        <div className="mt-8 flex justify-start">
            <button type="button" className="btnSize">{text}</button>
        </div>
    )
}

Button2.defaultProps = {
    color: 'green',
    text: 'Click'
}

Button2.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button2

