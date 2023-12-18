import React from 'react'
import img1 from "../assets/img1.png"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={img1} alt="Founder" />
            <h2>Ankit Malvi</h2>
            <p>Nothing but Creativity</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://linkedin.com/in/ankit-malvi-81b692219/"><AiFillLinkedin/></a>
                <a href="https://instagram.com/ank.malvi"><AiFillInstagram/></a>
                <a href="https://github.com/AnkitMalvi1"><AiFillGithub/></a>
            </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer