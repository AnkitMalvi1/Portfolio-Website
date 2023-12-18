import React, { useRef } from 'react'
import {motion,animate} from "framer-motion"
import Typewriter from 'typewriter-effect'
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs"
import img1 from "../assets/img1.png"

const Home = ({ratio}) => {
    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientsCount = () =>{
        animate(0,30,{
            duration:1, onUpdate:(v)=>(clientCount.current.textContent=v.toFixed())
        })
    }
    const animationProjectsCount = () =>{
        animate(0,100,{
            duration:1, onUpdate:(v)=>(projectCount.current.textContent=v.toFixed())
        })
    }
    const animations = {
        h1:{
            initial:{
                x: "-100%",
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            }
        },
        button:{
            initial:{
                y: "-100%",
                opacity:0,
            },
            whileInView:{
                y:0,
                opacity:1,
            }
        }
    }
  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animations.h1}>Hi, I'm <br/> Ankit Malvi</motion.h1>
                <Typewriter options={{
                    strings: ["A Developer","A Designer","A Creator"], autoStart:true, loop:true,
                    wrapperClassName:"typewriterpara",cursor:"",
                }}/>
                <div>
                    <a href="mailto:ankitmalviya06219@gmail.com">Hire Me</a>
                    <a href="#work">Projects <BsArrowUpRight/></a>
                </div>
                <article>
                    <p>
                        +{
                            ratio<2.2 && <motion.span whileInView={animationClientsCount} ref={clientCount}>30</motion.span>
                        }
                    </p>
                    <span>Clients Worldwide</span>
                </article>
                <aside>
                <article>
                    <p>
                        +{
                            ratio<2.2 && <motion.span whileInView={animationProjectsCount} ref={projectCount}>100</motion.span>
                        }
                    </p>
                    <span>Projects Done</span>
                </article>
                <article data-special>
                    <p>Contact</p>
                    <span>Info.ankitmalvi.tech</span>
                </article>
                </aside>
            </div>
        </section>
        <section>
            <img src={img1} alt={"AnkitMalvi"} />
        </section>
        <BsChevronDown/>        
    </div>
  )
}

export default Home