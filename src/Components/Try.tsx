import React from 'react'
import '../Style/Try.css'
import Event from './Event'
import Team from './Team'
import About from './About'
import Image from 'next/image'
import { FaCirclePlay } from "react-icons/fa6";
const Try = () => {
    return (
        <>
            <div id="top">




                <main>
                    <article>
                        {/* <!--
                      - #HERO
      --> */}

                        <section className="hero" id="hero">
                            <div className="container">
                                <p className="hero-subtitle">AKIT Presents</p>

                                <h1 className="h1 hero-title">Astra-X</h1>

                                <div className="btn-group">
                                    <button className="btn btn-primary">
                                        <span>Explore Event</span>
                                        <FaCirclePlay />

                                    </button>

                                    <button className="btn btn-link">Dream making</button>
                                </div>
                            </div>
                        </section>

                        <div className="section-wrapper">
                            {/* <!--
                          - #ABOUT
        --> */}

                            <About />

                            {/* <!--
                          - #TOURNAMENT
        --> */}

                            <section className="tournament" id="tournament">
                                <div className="container">
                                    <div className="tournament-content">
                                        <p className="tournament-subtitle">Check out our next</p>

                                        <h2 className="h3 tournament-title">Gaming tournaments !</h2>

                                        <p className="tournament-text">
                                            Lpsum dolor sit amet, consectetur adipiscing elit, sed labore et
                                            dolore magna aliqua.
                                        </p>

                                        <button className="btn btn-primary">Join with us</button>
                                    </div>

                                    <div className="tournament-prize">
                                        <h2 className="h3 tournament-prize-title">Prize pool</h2>

                                        <data value="80000">$80000</data>

                                        <figure>
                                            <img
                                                src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/prize-img.png"
                                                alt="Prize image"
                                            />
                                        </figure>
                                    </div>

                                    <div className="tournament-winners">
                                        <h2 className="h3 tournament-winners-title">Last winners</h2>

                                        <ul className="tournament-winners-list">
                                            <li>
                                                <div className="winner-card">
                                                    <figure className="card-banner">
                                                        <img
                                                            src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/winner-img-1.png"
                                                            alt="Winner image"
                                                        />
                                                    </figure>

                                                    <h3 className="h5 card-title">1st place</h3>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="winner-card">
                                                    <figure className="card-banner">
                                                        <img
                                                            src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/winner-img-2.png"
                                                            alt="Winner image"
                                                        />
                                                    </figure>

                                                    <h3 className="h5 card-title">2nd place</h3>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>



                            <section className="gallery">
                                <div className="container">
                                    <ul className="gallery-list has-scrollbar">
                                        <li>
                                            <figure className="gallery-item">
                                                <img
                                                    src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/gallery-img-1.jpg"
                                                    alt="Gallery image"
                                                />
                                            </figure>
                                        </li>

                                        <li>
                                            <figure className="gallery-item">
                                                <img
                                                    src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/gallery-img-2.jpg"
                                                    alt="Gallery image"
                                                />
                                            </figure>
                                        </li>

                                        <li>
                                            <figure className="gallery-item">
                                                <img
                                                    src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/gallery-img-3.jpg"
                                                    alt="Gallery image"
                                                />
                                            </figure>
                                        </li>

                                        <li>
                                            <figure className="gallery-item">
                                                <img
                                                    src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/gallery-img-4.jpg"
                                                    alt="Gallery image"
                                                />
                                            </figure>
                                        </li>
                                    </ul>
                                </div>
                            </section>






                            <Team />
                            <Event />


                            <section className="newsletter">
                                <div className="container">

                                    <div className="newsletter-card flex justify-center items-center md:flex-row flex-col">
                                        <img
                                            src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/newsletter-img.png"
                                            alt="Newsletter image"
                                        />
                                        <h2 className="h2 newsletter-title px-0 md:px-1 text-center">Dive into Innovation: Experience Astra-X, Our 3-Day Tech Fest!</h2>
                                        <img className='hidden md:block'
                                            src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/newsletter-img.png"
                                            alt="Newsletter image"
                                        />


                                        {/* <div className="newsletter-content">
                                            <figure className="newsletter-img flex justify-center items-center">
                                                <img
                                                    src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/newsletter-img.png"
                                                    alt="Newsletter image"
                                                />
                                            </figure>
                                            <h2 className="h2 newsletter-title">Dive into Innovation: Experience Astra-X, Our 3-Day Tech Fest!</h2>
                                        </div> */}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </article>
                </main>

                {/* <!--
              - #FOOTER
  --> */}
            </div>

        </>
    )
}

export default Try