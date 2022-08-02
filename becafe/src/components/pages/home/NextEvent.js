
import { Link } from 'react-router-dom'
import CountUp from '../../../common/countUp'

const NextEvent = () => {

  return (
    <div className="rs-about main-home bg3 pt-120 pb-120 md-pt-80 md-pb-80">
      <div className="container">
          <div className="row y-middle">
              <div className="col-lg-6 pe-5 md-pe-5 md-mb-50">
                  <div className="images-part">
                      <img src="/images/about.png" alt="Images" />
                  </div>
              </div>
              <div className="col-lg-6 ps-5">
                  <div className="sec-title sec-title-left">
                      <span className="sub-text">About Next Event</span>
                      <h2 className="title pb-22">
                        The transformative power of classical music
                      </h2>
                      <div className="heading-border-line left-style"></div>
                      <p className="desc margin-0 pt-40 pb-25">
                      Benjamin Zander has two infectious passions: classical music, and helping us all realize our untapped love for it -- and by extension, our untapped love for all new possibilities, new experiences, new connections.
                      </p>
                      <div className="rs-counter about-style">
                          <div className="row">
                              <div className="col-lg-6 md-mb-30">
                                  <div className="counter-list">
                                      <div className="counter-icon">
                                          <img src="/images/13.png" alt="Counter" />
                                      </div>
                                      <div className="counter-text plus">
                                          <div className="rs-count">
                                            <CountUp begin={0} end={9} duration={150} />
                                          </div>
                                          <h4 className="title">Benjamin Zander</h4>
                                      </div>
                                  </div>
                              </div> 
                              <div className="col-lg-6">
                                  <div className="counter-list">
                                      <div className="counter-icon">
                                          <img src="/images/9.png" alt="Counter" /> 
                                      </div>
                                      <div className="counter-text plus">
                                          <div className="rs-count">
                                            <CountUp begin={0} end={123} duration={150} />
                                          </div>
                                          <h4 className="title">Registered</h4>
                                      </div>
                                  </div>
                              </div> 
                          </div>
                      </div>
                      <div className="btn-part mt-45">
                          <Link className="readon btn-text" to={'/register'}>                              
                              <img src="/images/plus.png" alt="" />
                              <span>Book Now</span>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}

export default NextEvent