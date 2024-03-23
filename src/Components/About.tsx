import Image from 'next/image'
import React from 'react'
import Img1 from "@/Components/Image/pngwing.com (9).png"
const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <figure className="about-banner">
                    <Image
                        src={Img1}
                        alt='logo' />
                    {/* <img
                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/about-img.png"
                        alt="M shape"
                        className="about-img"
                    />

                    <img
                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/character-1.png"
                        alt="Game character"
                        className="character character-1"
                    />

                    <img
                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/character-2.png"
                        alt="Game character"
                        className="character character-2"
                    />

                    <img
                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/character-3.png"
                        alt="Game character"
                        className="character character-3"
                    /> */}
                </figure>

                <div className="about-content">
                    <p className="about-subtitle">Register now ! Astra-X  2k24</p>

                    <h2 className="about-title">
                        Unlock Innovation: Join Us for an Epic <strong>Hackathon Event! </strong>
                    </h2>

                    <p className="about-text">
                        Participation is highly encouraged, Register now, we assure you that you'll make some beautiful memories in the process
                    </p>

                    <p className="about-bottom-text">
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>

                        <span>Will sharpen your brain and focus</span>
                    </p>
                </div>
            </div>
        </section>)
}

export default About