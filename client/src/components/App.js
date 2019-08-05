import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// Image Files
import t6 from '../img/truck6.png';
import t8 from '../img/truck8.png';
import FirstImg from '../img/one.png';
import SecondImg from '../img/two.png';
import ThirdImg from '../img/three.png'
import FourthImg from '../img/four.png';
import FifthImg from '../img/five.png'
import Picture from '../img/pic.png';
import headicon from '../img/headicon.png';
import FooterImg from '../img/truck3.png';

// Animate Effect
import ScrollEffect from 'react-animate-on-scroll';
// import MapContainer from './mapsapi';
import Form from './form';

class App extends React.Component {

    navRightRef = React.createRef();
    aboutUsRef = React.createRef();
    serviceUsRef = React.createRef();
    contactUsRef = React.createRef();
    bgRef = React.createRef();

    openMenu = (evt) => {
        evt.currentTarget.classList.toggle('open');
        this.navRightRef.current.classList.toggle('responsive');
        this.aboutUsRef.current.classList.add('animated', 'slideInLeft', 'faster');
        this.serviceUsRef.current.classList.add('animated', 'slideInLeft', 'faster');
        this.contactUsRef.current.classList.add('animated', 'slideInLeft', 'faster');
        this.bgRef.current.classList.toggle('hide');
        this.bgRef.current.classList.add('animated', 'slideInLeft', 'faster');
    };

    render() {
        return (

            <div className="screen-wrapper">

                {/* NavBar */}
                <div className="nav-bars animated slideInDown faster">
                    <div className="nav-bar-left">
                        <a id="log-top" href="#home"> <img src={headicon} alt="Shanmugavadivel Trans" width="50" height="30"/> <p className="logo-text">Shanmugavadivel Trans</p></a>
                    </div>
                    <div ref={this.navRightRef} className="nav-bar-right">
                        <a id="home-top" href="#home">Home</a>
                        <a ref={this.aboutUsRef} id="about-top" href="#about-body">About</a>
                        <a ref={this.serviceUsRef} id="services-top" href="#services-body">Services</a>
                        <a ref={this.contactUsRef} id="contact-top" href="#location">Contact</a>
                        <a id="location-top" href="#location">Location</a>
                        <div id="toggleMenu" onClick={(evt) => this.openMenu(evt)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div ref={this.bgRef} className="bg-top hide"></div>
                </div>

                <div className="carousel-ctn" id="home">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="one"
                                src={FirstImg}
                                alt="first slide"
                            />
                            <div className="captionOne">
                                <Carousel.Caption>
                                    <h3><i className="abc fas fa-quote-left"></i>The Important Thing Is Not The Miles You've Driven,But What You've Driven Into Your Head With Those Miles....<i className="fas fa-quote-right"></i></h3>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="two"
                                src={SecondImg}
                                alt="second slide"
                            />
                            <div className="captionTwo">
                                <Carousel.Caption>
                                    <h3><i className="fas fa-quote-left"></i>I Weigh 40 Tons When I'm Fully Loaded. It Takes Me The Length Of A Football Field To Stop. Please Don't Cut Me Off....<i className="fas fa-quote-right"></i></h3>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="two"
                                src={ThirdImg}
                                alt="second slide"
                            />
                            <div className="captionThree">
                                <Carousel.Caption>
                                    <h3><i className="fas fa-quote-left"></i>Most Drivers Are Prepared For What They Know Will Challenge Them The Most....<i className="fas fa-quote-right"></i></h3>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="two"
                                src={FourthImg}
                                alt="second slide"
                            />
                            <div className="captionFour">
                                <Carousel.Caption>
                                    <h3><i className="fas fa-quote-left"></i>An Experienced Driver Can React Quickly To Do The Right Thing At The Right Time To Avoid A Collision....<i className="fas fa-quote-right"></i></h3>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="two"
                                src={FifthImg}
                                alt="second slide"
                            />
                            <div className="captionFive">
                                <Carousel.Caption>
                                    <h3><i className="fas fa-quote-left"></i>Protect Yourself, Other Road Users, The Environment And The Equipment. Put Chains On Before You Have An Accident Or Spin Out....<i className="fas fa-quote-right"></i></h3>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

                {/* Services */}
                <div className="services" id="services-body">
                    <div className="serviceHeader">
                        <h1>OUR SERVICES</h1>
                    </div>

                    <div className="icons">
                        <ScrollEffect animateIn="bounceInRight">
                            <div className="icon icon-right">

                                <p><i className="fas fa-quote-left"></i> Shanmugavadivel Trans offers a complete service for road transportation delivery options for nearly every type of shipment travelling throughout India with 24/7 customer support and integrated logistics.<i className="fas fa-quote-right"></i></p>

                                <img className="icon-edit" src={t8} alt={t8} width="300" height="320" />
                            </div>
                        </ScrollEffect>
                        <ScrollEffect animateIn="bounceInLeft">
                            <div className="icon icon-left">
                                <img src={t6} alt={t6} width="300" height="255"/>

                                <p><i className="fas fa-quote-left"></i>Dedicated team to handle various aspects of contract carriage, freight brokerage, intermodal and drayage, order fulfillment, supply chain consulting, transportation management, warehousing and distribution.<i className="fas fa-quote-right"></i></p>

                            </div>
                        </ScrollEffect>
                    </div>
                </div>

                {/* About US */}
                <div className="about-us" id="about-body">
                    <div className="about-us-heading">
                        <h1>ABOUT US</h1>
                    </div>
                    <div className="about-us-body">
                        <img className="picture" src={Picture} alt="About-Us" width="550" height="500"/><br/>

                        <div className="about-us-para">
                            <h5>
                                <i className="fas fa-quote-left"></i>
                                OUR MOTO : We care.. because we're people driven!<i className="fas fa-quote-right"></i>
                            </h5>
                            <p>We are one of the efficient carriers in Tamil Nadu today. Providing a high-service, dependable and Utilizing specialized equipment for Transport management. We offer container checking & service , yard management, warehousing and distribution, container handling(loading & unloading), container loading & unloading through proper manpower & machinery</p>

                        </div>
                    </div>
                </div>

                {/* Form Element */}
                <div>
                    <Form />
                </div>

                {/* Footer at the End */}
                <ScrollEffect animateIn="fadeInUp">
                    <div className="footer" id="location">
                        <div className="footer-section1">
                            <h2>CONTACT DETAILS</h2>
                            <p>Email:<span id="emailId">jshanmugavadiveltrans1999@gmail.com</span></p>
                            <p>Contact Number: <span id="contactNo">9841722722</span></p>
                            <p>©2019 Shanmugavadivel Trans.</p>
                        </div>
                        <div className="footer-section2">
                            <h2>LOCATION</h2>
                            <div className="footer-body">
                                <img src={FooterImg} alt="Footer " width="200" height="200"></img>
                                <div className="footer-para">
                                    <p>No.9/5, Mada Chruch Street, Royapuram, Chennai - 600013.</p>
                                    <p id="watermark">Developed & Designed By Aamir Khan H</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollEffect>

            </div>

        );
    }
}

export default App;
