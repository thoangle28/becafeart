import CountDownTimer from '../home/CountDown'

const About = () => {
  return (
    <>
      <div className="rs-about style1 pt-120 pb-120 md-pt-80 md-pb-75">
        <div className="container">
          <div className="row y-middle">
            <div className="col-lg-6 pr-15 md-pr-15 md-mb-50">
              <div className="images-part">
                <img src="/images/about.png" alt="Images" />
              </div>
            </div>
            <div className="col-lg-6 pl-45 md-pl-15">
              <div className="sec-title text-md-left">
                <span className="sub-text">About Be Cafe</span>
                <h2 className="title pb-22">
                  Welcome to Digital Marketing Meetup 2021
                </h2>
                <div className="heading-border-line left-style"></div>
                <p className="desc margin-0 pt-40">
                  Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt, explicabo.
                </p>
                <p className="desc margin-0 pt-15">
                  Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt, explicabo.
                </p>
                <p className="desc margin-0 pt-15">
                  Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt, explicabo.
                </p>
                <p className="desc margin-0 pt-15">
                  Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt, explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rs-services style4 bg14 pt-120 pb-120 md-pt-80 md-pb-80">
        <div className="container">
            <div className="row y-middle">
                <div className="col-lg-6 md-mb-50">
                    <div className="sec-title mb-60 text-md-left">
                        <span className="sub-text">Join The Event</span>
                        <h2 className="title pb-25">
                            Our Provided Perks For You<br />
                            During Conference
                        </h2>
                        <div className="heading-border-line left-style"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="services-item mb-45">
                                <div className="services-icon">
                                    <img src="/images/1.png" alt="Images" />
                                </div>
                                <div className="services-text text-md-left">
                                    <h3 className="title"><a href="services-style1.html">Photo Booth</a></h3>
                                    <p className="services-txt">Quisque placerat vitae scelerise event.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="services-item mb-45">
                                <div className="services-icon">
                                    <img src="/images/2.png" alt="Images" />
                                </div>
                                <div className="services-text text-md-left">
                                    <h3 className="title"><a href="services-style1.html">After Party</a></h3>
                                    <p className="services-txt">Quisque placerat vitae scelerise event.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="services-item mb-45">
                                <div className="services-icon">
                                    <img src="/images/3.png" alt="Images" />
                                </div>
                                <div className="services-text text-md-left">
                                    <h3 className="title"><a href="services-style1.html">T-shirts</a></h3>
                                    <p className="services-txt">Quisque placerat vitae scelerise event.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="services-item mb-45">
                                <div className="services-icon">
                                    <img src="/images/4.png" alt="Images" />
                                </div>
                                <div className="services-text text-md-left">
                                    <h3 className="title"><a href="services-style1.html">Ice Cream</a></h3>
                                    <p className="services-txt">Quisque placerat vitae scelerise event..</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="services-item mb-45">
                                <div className="services-icon">
                                    <img src="/images/5.png" alt="Images" />
                                </div>
                                <div className="services-text text-md-left">
                                    <h3 className="title"><a href="services-style1.html">Vouchers</a></h3>
                                    <p className="services-txt">Quisque placerat vitae scelerise event.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="services-item">
                                <div className="services-icon">
                                    <img src="/images/6.png" alt="Images" />
                                </div>
                                <div className="services-text text-md-left">
                                    <h3 className="title"><a href="services-style1.html">Speakers</a></h3>
                                    <p className="services-txt">Quisque placerat vitae scelerise event.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pl-50 md-pl-15">
                    <div className="rs-videos choose-video">
                        <div className="images-video">
                            <img src="/images/about-join.png" alt="images" />
                        </div>
                        <div className="animate-border">
                            <a className="popup-border" href="https://www.youtube.com/watch?v=FMvA5fyZ338">
                                <i className="fa fa-play"></i>
                            </a>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
      </div>
      <CountDownTimer />
    </>
  )
}

export default About