import './About.css'
import { ReactComponent as Vinyl }  from '../../assets/vinyl.svg'
import { ReactComponent as Road }  from '../../assets/road.svg'
import { ReactComponent as Laptop }  from '../../assets/laptop.svg'
import {useRef, useContext, useEffect} from 'react'
import handleViewport from 'react-in-viewport';
import FeedbackContext from '../../../context/feedback/FeedbackContext'



function About(props) {

    const {scroll, dispatch} = useContext(FeedbackContext);
    const scrollTo = useRef();
    
   

    useEffect(() => {
        if(scroll === true){
            scrollTo.current.scrollIntoView({ behavior: "smooth", block: "center"})
            dispatch({
                    type: 'SCROLL_VIEW',
                    payload: false
                })
        }

    }, [scroll])


const Block = (props) => {
    const { inViewport, forwardedRef, enterCount } = props;

    if (inViewport && enterCount === 1) {
        return (
          <div ref={forwardedRef}  className="about-page">
            <section className="section-two">
                <div className="box1 box">ABOUT ME</div>
                <div className="box2 box"></div>
                <div className="box3 box"><Laptop className="laptop about-svg"/></div>
                <div className="box4 box">WHAT I DO</div>
                <div className="box5 box"></div>
                <div ref={scrollTo} className="box6 box"><Road className="road about-svg"/></div>
                <div className="box7 box">THINGS I LOVE</div>
                <div className="box8 box"></div>
                <div className="box9 box"><Vinyl className="vinyl about-svg"/></div>
                <div className="box10 box"></div>
                <div className="box11 box"></div>
                <div className="box12 box"></div>
                <div className="box13 box"></div>
                <div className="box14 box"></div>
                <div className="box15 box"></div>
                <div className="box16 box"></div>
                <div className="box19 box"></div>
            </section>
        </div>
        )
    }
    return (
        
        <div ref={forwardedRef}  className="about-page">
            <section className="section-two">
                <div className="box1 box">ABOUT ME</div>
                <div className="box2 box"></div>
                <div className="box3 box"><Laptop className="laptop about-svg"/></div>
                <div className="box4 box">WHAT I DO</div>
                <div className="box5 box"></div>
                <div ref={scrollTo} className="box6 box"><Road className="road about-svg"/></div>
                <div className="box7 box">THINGS I LOVE</div>
                <div className="box8 box"></div>
                <div className="box9 box"><Vinyl className="vinyl about-svg"/></div>
                <div className="box10 box"></div>
                <div className="box11 box"></div>
                <div className="box12 box"></div>
                <div className="box13 box"></div>
                <div className="box14 box"></div>
                <div className="box15 box"></div>
                <div className="box16 box"></div>
                <div className="box19 box"></div>
            </section>
        </div>
    );
};
const ViewportBlock = handleViewport(Block);

    return (
        <>
            <ViewportBlock onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
            
        </>
        
    )
}

export default About
