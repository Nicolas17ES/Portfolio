import './Skills.css'

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
    return (
        <div className="skills-right">
                <div className="skill skill1">
                    <Reactsvg className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/></span>
                </div>
                <div className="skill skill2">
                    <Vue className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/></span>
                </div>
                <div className="skill skill3">
                    <Android className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/></span>
                </div>
                <div className="skill skill4">
                    <Laravel className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/><AiOutlineStar size={21}/></span>
                </div>
                <div className="skill skill5">
                    <Javascript className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={21}/><BsStarHalf className="half-star" size={18}/></span>
                </div>
                <div className="skill skill6">
                    <Java className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/><AiOutlineStar size={21}/></span>
                </div>
                <div className="skill skill7">
                    <Php className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/><AiOutlineStar size={21}/></span>
                </div>
                <div className="skill skill8">
                    <Node className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/></span>
                </div>
                <div className="skill skill9">
                    <Html className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/></span>
                </div>
                <div className="skill skill10">
                    <Css className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/></span>
                </div>
                <div className="skill skill11">
                    <Bootstrap className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/><AiOutlineStar size={21}/></span>
                </div>
                <div className="skill skill12">
                    <Tailwind className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/><AiOutlineStar size={21}/></span>
                </div>
                <div className="skill skill13">
                    <Mysql className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/></span>
                </div>
                <div className="skill skill14">
                    <Mongodb className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/><AiOutlineStar size={21}/></span>
                </div>
                <div className="skill skill15">
                    <Figma className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiOutlineStar size={21}/><AiOutlineStar size={21}/></span>
                </div>
                <div className="skill skill16">
                    <Fire className="skill-icon"/>
                    <span className="skill-stars"><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/><AiFillStar size={20}/></span>
                </div>
            </div>
    )
}

export default SkillsTable
