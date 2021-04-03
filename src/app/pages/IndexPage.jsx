import React, { useRef, useEffect } from 'react'

//components
// import Container from '../components/Container/Container'
// import Hero from '../components/Hero/Hero'
// import Introduction from '../components/Introduction/Introduction'
// import Experience from '../components/Experience/Experience'

//Styles
import './IndexPage.css'
import styled from 'styled-components'
const IndexPageStyled = styled.div`
  display: flex;

  @media only screen and (max-width: 37.5em) {
    /* phone //600px */
  }
`

const IndexPage = ({ sideBarData }) => {

  // const introductionRef = useRef(null)

  // const scrollToIntroductionSection = () => introductionRef.current.scrollIntoView({
  //   behavior: 'smooth', block: 'end'
  // });

  useEffect(() => {
    function handleScroll(headerArea, navOffsetTop) {
      const scroll = window.scrollY;
      if (scroll >= navOffsetTop) {
        headerArea.classList.add('navbar_fixed');
      } else {
        headerArea.classList.remove('navbar_fixed');
      }
    }

    const navOffsetTop = document.querySelector('header').offsetHeight + 50;
    const headerArea = document.querySelector('.header_area');
    if (headerArea) {
      window.addEventListener('scroll', () => handleScroll(headerArea, navOffsetTop));
    }

    return () => {
      if (headerArea) {
        window.removeEventListener('scroll', () => handleScroll(headerArea, navOffsetTop))
      }
    }
  }, [])

  return (
    <div className="index-page">
      {/* <!--================ Start Header Area =================--> */}
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              {/* <!-- Brand and toggle get grouped for better mobile display --> */}
              <a className="navbar-brand logo_h" href="index.html"><img width="100px" src="img/logo.png" alt="" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav justify-content-end">
                  <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="#">Elements</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Portfolio Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Blog</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Blog Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* <!--================ End Header Area =================--> */}

      {/* <!--================ Start Home Banner Area =================--> */}
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">Hell0</h3>
                  <h1 className="text-uppercase" style={{ fontSize: '50px' }}>I am Tandale Shubham</h1>
                  <h5 className="text-uppercase">Programmer / Web developer</h5>
                  <div className="d-flex align-items-center">
                    <a className="primary_btn" href="#"><span>About Me</span></a>
                    <a className="primary_btn tr-bg" href="#"><span>Get CV</span></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <img className="" src="img/banner/home-right.png" alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8 font-italic text-center" style={{ color: 'green', fontFamily: 'georgia', fontSize: '20px' }}>
                <q id="quote"> </q>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End Home Banner Area =================--> */}
      <hr width="50%" />
      {/* <!--================ Start About Us Area =================--> */}
      <section className="about_area section_gap">
        <div className="container">
          <div className="row justify-content-start align-items-center">
            <div className="col-lg-5">
              <div className="about_img">
                <img className="" src="img/about-us.png" alt="" />
              </div>
            </div>

            <div className="offset-lg-1 col-lg-5">
              <div className="main_title text-left">
                <h2>let’s <br />
                    Introduce about <br />
                      myself</h2>
                <p className="text-justify">
                  I am a computer science student and a programmer with the knowledge of many programming languages.
						</p>
                <p className="text-justify">
                  I have worked lot on web development projects. My aim is to provide the producus which are fully dynamic
                  and responsive. Most of the projects i have done uptil now are fully dynamic. Also I work on other areas
                  like mobile development and desktop development.
						</p>
                <a className="primary_btn" href="#"><span>About Me</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End About Us Area =================--> */}
      <hr width="50%" />
      <br /><br /><br /><br />
      {/* <!--================ Srart Brand Area =================--> */}
      <section className="brand_area section_gap_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title text-left">
                <h2>quality work <br />
                            Recently done project </h2>
						Demos will be provided for every project very soon...
					</div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <a href="https://skncse.000webhostapp.com/cc/" target="_blank">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/logo.png" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <a href="http://sknscoe.ac.in/feedback/" target="_blank">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/prj/feedback.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <a href="http://advancecpp.000webhostapp.com" target="_blank">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/prj/cal.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <a href="http://subpingale83.000webhostapp.com" target="_blank">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/prj/grievance.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <a href="https://yashshreecab.com" target="_blank">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/prj/ysc.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <a href="https://oralskn.000webhostapp.com/" target="_blank">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/prj/qa.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <a href="https://skncse.000webhostapp.com/cool/cool/cool/" target="_blank">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/prj/mail.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <a href="https://quesans.000webhostapp.com/index2.php?sub=1&topic=1" target="_blank">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/prj/tut.png" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <a href="https://royalstar.000webhostapp.com/index.php" target="_blank">
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <img src="img/prj/royalstar.jpg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-4 col-md-6">
              <div className="client-info">
                <div className="d-flex mb-50">
                  <span className="lage">2</span>
                  <span className="smll">Years Experience Working</span>
                </div>
                <a href="tel: 7875175975">
                  <div className="call-now d-flex">
                    <div>
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="ml-15">
                      <p>call us now</p>
                      <h3>(+91)-7875175975</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End Brand Area =================--> */}
      <hr width="50%" />
      <br /><br /><br /><br />

      {/* <!--================ Start Features Area =================--> */}
      <section className="features_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>service offers </h2>
                <p>
                  Is give may shall likeness made yielding spirit a itself togeth created
							after sea <br /> is in beast beginning signs open god you're gathering ithe
						</p>
              </div>
            </div>
          </div>
          <div className="row feature_inner">
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="img/services/s1.png" alt="" />
                <h4>Wp developing</h4>
                <p>We build advance dynamic websites with efficient performance.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="img/services/s2.png" alt="" />
                <h4>Android developing</h4>
                <p>We build all types android apps from basic to high end.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="img/services/s3.png" alt="" />
                <h4>Web design</h4>
                <p>We provide the attractive web designs as per customer's requirements.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="img/services/s4.png" alt="" />
                <h4>Desktop developing</h4>
                <p>We build all types desktop apps from basic to high end.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End Features Area =================--> */}
      <hr width="50%" />
      <br /><br /><br /><br />

      {/* <!--================Start Portfolio Area =================--> */}
      <section className="portfolio_area" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title text-left">
                <h2>quality work <br />
            Recently done project </h2>
              </div>
            </div>
          </div>
          <div className="filters portfolio-filter">
            <ul>
              <li className="active" data-filter="*">all</li>
              <li data-filter=".popular">popular</li>
              <li data-filter=".latest"> latest</li>
              <li data-filter=".following">following</li>
              <li data-filter=".upcoming">upcoming</li>
            </ul>
          </div>

          <div className="filters-content">
            <div className="row portfolio-grid justify-content-center">
              <div className="col-lg-4 col-md-6 all latest">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/logo.png" alt="" />
                    <div className="overlay"></div>
                    <a href="img/logo.png" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">CollegeBox</a></h4>
                    <p>Best College App</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all popular">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/prj/feedback.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/prj/feedback.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">Feedback</a></h4>
                    <p>College Feedback System</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all latest">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/prj/cal.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/prj/cal.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">Calculator++</a></h4>
                    <p>Advance Calculator</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all popular">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/prj/grievance.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/prj/grievance.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">Grievance</a></h4>
                    <p>College Grievance System</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all following">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/prj/ysc.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/prj/ysc.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">Yash Shree Cab</a></h4>
                    <p>Car Rental Website</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all upcoming">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/prj/qa.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/prj/qa.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">Question Answer</a></h4>
                    <p>Online Study Platform</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all upcoming following">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/prj/mail.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/prj/mail.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">Mail Checker</a></h4>
                    <p>Mail Checker App</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all following">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/prj/tut.png" alt="" />
                    <div className="overlay"></div>
                    <a href="img/prj/tut.png" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>Tutorial++</h4>
                    <p>Dynamic Tutorial Website</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all upcoming">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/prj/royalstar.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/prj/royalstar.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">Royal Star</a></h4>
                    <p>Personal Website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ================End Portfolio Area ================= --> */}


      {/* <!--================ Start Testimonial Area =================--> */}
      <div className="testimonial_area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>client say about me</h2>
                <p>Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast <br />
            beginning signs open god you're gathering ithe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="testi_slider owl-carousel">
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="img/testimonials/t1.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Elite Martin</h4>
                      <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth
                  seas unto. Saw from </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="img/testimonials/t2.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Davil Saden</h4>
                      <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth
                  seas unto. Saw from </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="img/testimonials/t1.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Elite Martin</h4>
                      <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth
                  seas unto. Saw from </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="img/testimonials/t2.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Davil Saden</h4>
                      <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth
                  seas unto. Saw from </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="img/testimonials/t1.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Elite Martin</h4>
                      <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth
                  seas unto. Saw from </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="img/testimonials/t2.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Davil Saden</h4>
                      <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth
                  seas unto. Saw from </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--================ End Testimonial Area =================--> */}

      {/* <!--================ Start Newsletter Area =================--> */}
      <section className="newsletter_area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="subscription_box text-center">
                <h2 className="text-uppercase text-white">Write To US</h2>
                <p className="text-white">
                  Please give your valuable time to write something about our website
          </p>
                <div className="subcribe-form" id="mc_embed_signup">
                  <form method="post" className="subscription relative" id="write_us_form">
                    <input name="email" id="email" placeholder="Email address" onblur="this.placeholder = 'Email address'"
                      required="required" type="email" />
                    <br /><br />
                    <textarea placeholder="Write Here..." name="msg" id="msg"></textarea>
                    <br /><br />
                    <button className="primary-btn hover d-inline" type="submit">Submit</button>
                    <div className="info"></div>
                  </form>
                </div>
                <center><span id="res" style={{ fontFamily: 'georgia', fontSize: '18px' }}></span></center>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End Newsletter Area =================--> */}

      {/* <!--================Footer Area =================--> */}
      <footer className="footer_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="footer_top flex-column">
                <div className="footer_logo">
                  <a href="#">
                    <img src="img/logo.png" alt="" />
                  </a>
                  <h4>Follow Me</h4>
                </div>
                <div className="footer_social">
                  <a href="https://www.facebook.com/royaltsp" target="_blank"><i className="fa fa-facebook"></i></a>
                  <a href="https://www.linkedin.com/in/royaltsp/" target="_blank"><i className="fa fa-linkedin"></i></a>
                  <a href="https://www.instagram.com/royaltsp/" target="_blank"><i className="fa fa-instagram"></i></a>
                  <a href="https://twitter.com/RoyalTSP" target="_blank"><i className="fa fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="row footer_bottom justify-content-center">
            <p className="col-lg-8 col-sm-12 footer-text">
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
					Copyright &copy;
					<script>
                document.write(new Date().getFullYear());
					</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a
                href="https://colorlib.com" target="_blank">Colorlib</a>
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            </p>
          </div>
        </div>
      </footer>
      {/* <!--================End Footer Area ============== */}
    </div>
  )
}

export default IndexPage
