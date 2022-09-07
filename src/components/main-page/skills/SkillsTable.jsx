import './Skills.css'

import {useRef, useEffect, useState} from 'react';
import { useInView } from 'react-intersection-observer';
import {motion, useAnimation} from 'framer-motion'

import {ReactComponent as Android } from '../../assets/skills/android.svg'
import {ReactComponent as Bootstrap } from '../../assets/skills/bootstrap.svg'
import {ReactComponent as Css } from '../../assets/skills/css.svg'
import {ReactComponent as Figma } from '../../assets/skills/figma.svg'
import {ReactComponent as Html } from '../../assets/skills/html.svg'
import {ReactComponent as Java } from '../../assets/skills/java.svg'
import {ReactComponent as Javascript } from '../../assets/skills/javascript.svg'
import {ReactComponent as Laravel } from '../../assets/skills/laravel.svg'
import {ReactComponent as Mongodb } from '../../assets/skills/mongodb.svg'
import {ReactComponent as Mysql } from '../../assets/skills/mysql.svg'
import {ReactComponent as Node } from '../../assets/skills/node.svg'
import {ReactComponent as Php } from '../../assets/skills/php.svg'
import {ReactComponent as Reactsvg } from '../../assets/skills/react.svg'
import {ReactComponent as Tailwind } from '../../assets/skills/tailwind.svg'
import {ReactComponent as Vue } from '../../assets/skills/vue.svg'
import {ReactComponent as Fire } from '../../assets/skills/fire.svg'

import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'


function SkillsTable() {

    const [isOn, setIsOn] = useState(0);
    const [scale, setScale] = useState(false);
    const viewWidth = window.innerWidth;
    console.log(viewWidth)

    const animation = useAnimation();
    const animation2 = useAnimation();
    const [ref, inView] = useInView({
    threshold: 0.2,
    });
    const refScale = useRef(null);

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: "tween",
                    delay: 0.1,
                    duration: 0.5,
                },
            })
            animation2.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: "tween",
                    delay: 0.1,
                    duration: 0.5,
                },
            })
        } else if (!inView){
            animation.start({ x: "-40vw", opacity: 0 })
            animation2.start({ x: "40vw", opacity: 0 })
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    // SCALE CENTER BOX ON CLICK 

    if(refScale === null || refScale.current === null){
        console.log('hey');
    }  else if(scale === true && viewWidth > 960 && (refScale !== null && refScale.current !== null)){
        const element = refScale.current;
        element.className = "main-text-skills2"
    }  else if(scale === false && viewWidth > 960 && (refScale !== null && refScale.current !== null)){
        const element = refScale.current;
        element.className = "main-text-skills"
    }


    return (
        <div onClick={() => setScale(!scale)} ref={ref} className="skills-right">
                <div ref={refScale} onClick={() => setScale(!scale)} onMouseLeave={() => setScale(false)} className="main-text-skills">
                     <div className="inner">
                        <span>{`<React>`}&nbsp; &nbsp; {`<Vue>`}</span>
                        <span className="lorem-two red"> {`<Javascript>`}</span>
                        <span className="lorem-three">{`<HTML>`} &nbsp; &nbsp;{`<CSS>`}</span>
                        <span className="lorem-four red">{`<Bootstrap>`} &nbsp; &nbsp; {`<Tailwind>`}</span>
                        <span className="lorem-four2">{`<Figma>`}</span>
                        <span className="lorem-five red">{`<Android>`} &nbsp; &nbsp; {`<Java>`}</span>
                        <span className="lorem-six">{`<NodeJS>`}</span>
                        <span className="lorem-seven">{`<PHP>`} &nbsp; &nbsp; {`<Laravel>`}</span>
                        <span className="lorem-eight red">{`<Mysql>`} &nbsp; &nbsp; {`<MongoDb>`}</span>
                    </div>
                    <div className="inner">
                        <span>{`<React>`}&nbsp; &nbsp; {`<Vue>`}</span>
                        <span className="lorem-two red"> {`<Javascript>`}</span>
                        <span className="lorem-three">{`<HTML>`} &nbsp; &nbsp;{`<CSS>`}</span>
                        <span className="lorem-four red">{`<Bootstrap>`} &nbsp; &nbsp; {`<Tailwind>`}</span>
                        <span className="lorem-four2">{`<Figma>`}</span>
                        <span className="lorem-five red">{`<Android>`} &nbsp; &nbsp; {`<Java>`}</span>
                        <span className="lorem-six">{`<NodeJS>`}</span>
                        <span className="lorem-seven">{`<PHP>`} &nbsp; &nbsp; {`<Laravel>`}</span>
                        <span className="lorem-eight red">{`<Mysql>`} &nbsp; &nbsp; {`<MongoDb>`}</span>
                    </div>
                </div>
                <motion.div animate={animation} className="front-end end">
                    <h3><span className="red">FRONT</span>-END</h3>
                </motion.div>
                <motion.div animate={animation} className={`${isOn === 1 ? "skill skill1 animated left" : "skill skill1 left"}`} onMouseOver={() => setIsOn(1)}  onAnimationEnd={() => setIsOn(0)}>
                    <Reactsvg className="skill-icon"/>
                    {/* <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/></span> */}
                </motion.div>
                <motion.div animate={animation} className={`${isOn === 2 ? "skill skill2 animated left" : "skill skill2 left"}`} onMouseOver={() => setIsOn(2)}  onAnimationEnd={() => setIsOn(0)}>
                    <Vue className="skill-icon"/>
                </motion.div>
                <motion.div animate={animation2} className={`${isOn === 3 ? "skill skill3 animated right" : "skill skill3 right"}`} onMouseOver={() => setIsOn(3)}  onAnimationEnd={() => setIsOn(0)}>
                    <Android className="skill-icon"/>
                </motion.div>
                <motion.div animate={animation2} className={`${isOn === 4 ? "skill skill4 animated right" : "skill skill4 right"}`} onMouseOver={() => setIsOn(4)}  onAnimationEnd={() => setIsOn(0)}>
                    <Laravel className="skill-icon"/>
                </motion.div>
                <motion.div animate={animation2} className="back-end end">
                    <h3><span className="red">BACK</span>-END</h3>
                </motion.div>
               <motion.div animate={animation} className={`${isOn === 5 ? "skill skill5 animated left" : "skill skill5 left"}`} onMouseOver={() => setIsOn(5)}  onAnimationEnd={() => setIsOn(0)}>
                    <Javascript className="skill-icon"/>
                </motion.div>
                <motion.div animate={animation} className={`${isOn === 6 ? "skill skill6 animated left" : "skill skill6 left"}`} onMouseOver={() => setIsOn(6)}  onAnimationEnd={() => setIsOn(0)}>
                    <Figma className="skill-icon"/>
                </motion.div>
                <div className="hover-trick-left"></div>
                <motion.div animate={animation2} className={`${isOn === 7 ? "skill skill7 animated right" : "skill skill7 right"}`} onMouseOver={() => setIsOn(7)}  onAnimationEnd={() => setIsOn(0)}>
                    <Java className="skill-icon"/>
                </motion.div>
                <motion.div animate={animation2} className={`${isOn === 8 ? "skill skill8 animated right" : "skill skill8 right"}`} onMouseOver={() => setIsOn(8)}  onAnimationEnd={() => setIsOn(0)}>
                    <Node className="skill-icon"/>
                </motion.div>
                <motion.div animate={animation} className={`${isOn === 9 ? "skill skill9 animated left" : "skill skill9 left"}`} onMouseOver={() => setIsOn(9)}  onAnimationEnd={() => setIsOn(0)}>
                    <Html className="skill-icon"/>
                </motion.div>
                <motion.div animate={animation} className={`${isOn === 10 ? "skill skill10 animated left" : "skill skill10 left"}`} onMouseOver={() => setIsOn(10)}  onAnimationEnd={() => setIsOn(0)}>
                    <Css className="skill-icon"/>
                </motion.div>
                <motion.div animate={animation2} className={`${isOn === 11 ? "skill skill11 animated right" : "skill skill11 right"}`} onMouseOver={() => setIsOn(11)}  onAnimationEnd={() => setIsOn(0)}>
                    <Mysql className="skill-icon"/>
                </motion.div>
                <motion.div animate={animation2} className={`${isOn === 12 ? "skill skill12 animated right" : "skill skill12 right"}`} onMouseOver={() => setIsOn(12)}  onAnimationEnd={() => setIsOn(0)}>
                    <Mongodb className="skill-icon"/>
                </motion.div>
                <motion.div animate={animation} className={`${isOn === 13 ? "skill skill13 animated left" : "skill skill13 left"}`} onMouseOver={() => setIsOn(13)}  onAnimationEnd={() => setIsOn(0)}>
                    <Bootstrap className="skill-icon"/>
                </motion.div>
               <motion.div animate={animation} className={`${isOn === 14 ? "skill skill14 animated left" : "skill skill14 left"}`} onMouseOver={() => setIsOn(14)}  onAnimationEnd={() => setIsOn(0)}>
                    <Tailwind className="skill-icon"/>
                </motion.div>
                <motion.div animate={animation2} className={`${isOn === 15 ? "skill skill15 animated right" : "skill skill15 right"}`} onMouseOver={() => setIsOn(15)}  onAnimationEnd={() => setIsOn(0)}>
                    <Php className="skill-icon"/>
                </motion.div>
                <motion.div animate={animation2} className={`${isOn === 16 ? "skill skill16 animated right" : "skill skill16 right"}`} onMouseOver={() => setIsOn(16)}  onAnimationEnd={() => setIsOn(0)}>
                    <Fire className="skill-icon"/>
                </motion.div>
                <motion.div className="skills-title" data-text="Skills & Talent">
                   <h2>Skills <span className="talent">&</span> Talent</h2>
                </motion.div>
            </div>
    )
}

export default SkillsTable
