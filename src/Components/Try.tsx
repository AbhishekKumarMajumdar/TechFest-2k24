import React from 'react'
import '../Style/Try.css'

const Try = () => {
    return (
        <>
            <div id="top">
                {/* <!--
              - #HEADER
  --> */}



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

                                        <ion-icon name="play-circle"></ion-icon>
                                    </button>

                                    <button className="btn btn-link">Dream making</button>
                                </div>
                            </div>
                        </section>

                        <div className="section-wrapper">
                            {/* <!--
                          - #ABOUT
        --> */}

                            <section className="about" id="about">
                                <div className="container">
                                    <figure className="about-banner">
                                        <img
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
                                        />
                                    </figure>

                                    <div className="about-content">
                                        <p className="about-subtitle">Find team member</p>

                                        <h2 className="about-title">
                                            Experience just for gamers <strong>offer</strong>
                                        </h2>

                                        <p className="about-text">
                                            Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat,
                                            eros pede varius nisi, condimentum viverra felis nunc et lorem.
                                            In auctor lobortis lacus. Phasellus gravida semper nisi. Aliquam
                                            lobortis.
                                        </p>

                                        <p className="about-bottom-text">
                                            <ion-icon name="arrow-forward-circle-outline"></ion-icon>

                                            <span>Will sharpen your brain and focus</span>
                                        </p>
                                    </div>
                                </div>
                            </section>

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



                            <section className="team" id="team">
                                <div className="container">
                                    <h2 className="h2 section-title">Active Team Members</h2>

                                    <ul className="team-list">
                                        <li>
                                            <a href="#" className="team-member">
                                                <figure>
                                                    <img
                                                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/team-member-1.png"
                                                        alt="Team member image"
                                                    />
                                                </figure>

                                                <ion-icon name="link-outline"></ion-icon>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="team-member">
                                                <figure>
                                                    <img
                                                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/team-member-2.png"
                                                        alt="Team member image"
                                                    />
                                                </figure>

                                                <ion-icon name="link-outline"></ion-icon>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="team-member">
                                                <figure>
                                                    <img
                                                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/team-member-3.png"
                                                        alt="Team member image"
                                                    />
                                                </figure>

                                                <ion-icon name="link-outline"></ion-icon>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="team-member">
                                                <figure>
                                                    <img
                                                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/team-member-4.png"
                                                        alt="Team member image"
                                                    />
                                                </figure>

                                                <ion-icon name="link-outline"></ion-icon>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="team-member">
                                                <figure>
                                                    <img
                                                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/team-member-6.png"
                                                        alt="Team member image"
                                                    />
                                                </figure>

                                                <ion-icon name="link-outline"></ion-icon>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="team-member">
                                                <figure>
                                                    <img
                                                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/team-member-7.png"
                                                        alt="Team member image"
                                                    />
                                                </figure>

                                                <ion-icon name="link-outline"></ion-icon>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="team-member">
                                                <figure>
                                                    <img
                                                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/team-member-8.png"
                                                        alt="Team member image"
                                                    />
                                                </figure>

                                                <ion-icon name="link-outline"></ion-icon>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="team-member">
                                                <figure>
                                                    <img
                                                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/team-member-9.png"
                                                        alt="Team member image"
                                                    />
                                                </figure>

                                                <ion-icon name="link-outline"></ion-icon>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="team-member">
                                                <figure>
                                                    <img
                                                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/team-member-10.png"
                                                        alt="Team member image"
                                                    />
                                                </figure>

                                                <ion-icon name="link-outline"></ion-icon>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="team-member">
                                                <figure>
                                                    <img
                                                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/team-member-11.png"
                                                        alt="Team member image"
                                                    />
                                                </figure>

                                                <ion-icon name="link-outline"></ion-icon>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="team-member">
                                                <figure>
                                                    <img
                                                        src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/team-member-12.png"
                                                        alt="Team member image"
                                                    />
                                                </figure>

                                                <ion-icon name="link-outline"></ion-icon>
                                            </a>
                                        </li>
                                    </ul>

                                    <button className="btn btn-primary">view all members</button>
                                </div>
                            </section>



                            <section className="gears" id="gears">
                                <div className="container">
                                    <h2 className="h2 section-title">check our gears</h2>

                                    <ul className="gears-list">
                                        <li>
                                            <div className="gears-card">
                                                <div className="card-banner">
                                                    <a href="#">
                                                        <img
                                                            src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/gears-img-1.png"
                                                            alt="Headphone"
                                                        />
                                                    </a>

                                                    <button className="share">
                                                        <ion-icon name="share-social"></ion-icon>
                                                    </button>

                                                    <div className="card-time-wrapper">
                                                        <ion-icon name="time-outline"></ion-icon>

                                                        <span>In 4 days</span>
                                                    </div>
                                                </div>

                                                <div className="card-content">
                                                    <div className="card-title-wrapper">
                                                        <h3 className="h3 card-title">Headphone</h3>

                                                        <p className="card-subtitle">e-sports</p>
                                                    </div>

                                                    <div className="card-prize">$18</div>
                                                </div>

                                                <div className="card-actions">
                                                    <button className="btn btn-primary">
                                                        <ion-icon name="add-outline"></ion-icon>

                                                        <span>Add to cart</span>
                                                    </button>

                                                    <button className="btn card-btn">
                                                        <ion-icon name="heart-outline"></ion-icon>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="gears-card">
                                                <div className="card-banner">
                                                    <a href="#">
                                                        <img
                                                            src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/gears-img-2.png"
                                                            alt="Controller"
                                                        />
                                                    </a>

                                                    <button className="share">
                                                        <ion-icon name="share-social"></ion-icon>
                                                    </button>

                                                    <div className="card-time-wrapper">
                                                        <ion-icon name="time-outline"></ion-icon>

                                                        <span>In 4 days</span>
                                                    </div>
                                                </div>

                                                <div className="card-content">
                                                    <div className="card-title-wrapper">
                                                        <h3 className="h3 card-title">Controller</h3>

                                                        <p className="card-subtitle">e-sports</p>
                                                    </div>

                                                    <div className="card-prize">$29</div>
                                                </div>

                                                <div className="card-actions">
                                                    <button className="btn btn-primary">
                                                        <ion-icon name="add-outline"></ion-icon>

                                                        <span>Add to cart</span>
                                                    </button>

                                                    <button className="btn card-btn">
                                                        <ion-icon name="heart-outline"></ion-icon>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="gears-card">
                                                <div className="card-banner">
                                                    <a href="#">
                                                        <img
                                                            src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/gears-img-3.png"
                                                            alt="Gaming mask"
                                                        />
                                                    </a>

                                                    <button className="share">
                                                        <ion-icon name="share-social"></ion-icon>
                                                    </button>

                                                    <div className="card-time-wrapper">
                                                        <ion-icon name="time-outline"></ion-icon>

                                                        <span>In 4 days</span>
                                                    </div>
                                                </div>

                                                <div className="card-content">
                                                    <div className="card-title-wrapper">
                                                        <h3 className="h3 card-title">Gaming mask</h3>

                                                        <p className="card-subtitle">e-sports</p>
                                                    </div>

                                                    <div className="card-prize">$45</div>
                                                </div>

                                                <div className="card-actions">
                                                    <button className="btn btn-primary">
                                                        <ion-icon name="add-outline"></ion-icon>

                                                        <span>Add to cart</span>
                                                    </button>

                                                    <button className="btn card-btn">
                                                        <ion-icon name="heart-outline"></ion-icon>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </section>


                            <section className="newsletter">
                                <div className="container">
                                    <div className="newsletter-card">
                                        <div className="newsletter-content">
                                            <figure className="newsletter-img">
                                                <img
                                                    src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/newsletter-img.png"
                                                    alt="Newsletter image"
                                                />
                                            </figure>

                                            <h2 className="h2 newsletter-title">Subscribe to our newsletter</h2>
                                        </div>

                                        <form action="" className="newsletter-form">
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="Your Email Address"
                                                className="input-field"
                                            />

                                            <button type="submit" className="btn btn-secondary">
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </article>
                </main>

                {/* <!--
              - #FOOTER
  --> */}

                <footer>
                    <div className="footer-top">
                        <div className="container">
                            <div className="footer-brand-wrapper">
                                <a href="#" className="logo">
                                    <img
                                        src="https://raw.githubusercontent.com/codewithsadee/gamex/244de1829b8ad4249fcf160fc8cdaa4cc25db7ba/assets/images/logo.svg"
                                        alt="GameX logo"
                                    />
                                </a>

                                <div className="footer-menu-wrapper">
                                    <ul className="footer-menu-list">
                                        <li>
                                            <a href="#hero" className="footer-menu-link">Home</a>
                                        </li>

                                        <li>
                                            <a href="#about" className="footer-menu-link">About</a>
                                        </li>

                                        <li>
                                            <a href="#tournament" className="footer-menu-link">Tournament</a>
                                        </li>

                                        <li>
                                            <a href="#team" className="footer-menu-link">Team</a>
                                        </li>

                                        <li>
                                            <a href="#gears" className="footer-menu-link">Gears</a>
                                        </li>

                                        <li>
                                            <a href="#" className="footer-menu-link">Contact</a>
                                        </li>
                                    </ul>

                                    <div className="footer-input-wrapper">
                                        <input
                                            type="text"
                                            name="message"
                                            required
                                            placeholder="Find Here Now"
                                            className="footer-input"
                                        />

                                        <button className="btn btn-primary">
                                            <ion-icon name="search-outline"></ion-icon>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-quicklinks">
                                <ul className="quicklink-list">
                                    <li>
                                        <a href="#" className="quicklink-item">Faq</a>
                                    </li>

                                    <li>
                                        <a href="#" className="quicklink-item">Help center</a>
                                    </li>

                                    <li>
                                        <a href="#" className="quicklink-item">Terms of use</a>
                                    </li>

                                    <li>
                                        <a href="#" className="quicklink-item">Privacy</a>
                                    </li>
                                </ul>

                                <ul className="footer-social-list">
                                    <li>
                                        <a href="#" className="footer-social-link">
                                            <ion-icon name="logo-discord"></ion-icon>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer-social-link">
                                            <ion-icon name="logo-twitch"></ion-icon>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer-social-link">
                                            <ion-icon name="logo-xbox"></ion-icon>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="footer-social-link">
                                            <ion-icon name="logo-youtube"></ion-icon>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="container">
                            <p className="copyright">
                                Copyright &copy; 2023 <a href="#">Ted Martins</a>. all rights reserved
                            </p>

                            <figure className="footer-bottom-img">
                                <img
                                    src="https://raw.githubusercontent.com/codewithsadee/gamex/master/assets/images/footer-bottom-img.png"
                                    alt="Online payment companies logo"
                                />
                            </figure>
                        </div>
                    </div>
                </footer>



                <a href="#top" className="btn btn-primary go-top" data-go-top>
                    <ion-icon name="chevron-up-outline"></ion-icon>
                </a>
            </div>

        </>
    )
}

export default Try