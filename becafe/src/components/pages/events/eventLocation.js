const EventLocation = () => {
  return(
    <>
      <div className="rs-contact home-style1 pt-110 pb-120 md-pt-70 md-pb-80">
        <div className="container">
            <div className="sec-title text-center mb-85 md-mb-50">
                <span className="sub-text">Venue</span>
                <h2 className="title pb-26">
                    Event Location
                </h2>
                <div className="heading-border-line"></div>
            </div>
            <div className="row y-middle">
                <div className="col-lg-8 pr-50 md-pr-15 md-mb-50">
                    <div className="contact-map">
                        <iframe src="https://maps.google.com/maps?q=rstheme&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                    </div>
                </div>
                <div className="col-lg-4">
                  <div className="widget-item mb-20">
                      <div className="widget-img">
                          <img src="/images/2-1.png" alt="Images" />
                      </div>
                      <div className="address-item">
                          <div className="address-icon">
                              <img src="/images/1.png" alt="Images" />
                          </div>
                          <div className="address-text text-md-left">
                              <h3 className="title"> Address</h3>
                              <p className="services-txt">  
                                  33 Xóm 6, <br />
                                  Ngọc Anh, Phú Thượng, Huế 
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="widget-item mb-20">
                      <div className="widget-img">
                          <img src="/images/2-2.png" alt="Images" />
                      </div>
                      <div className="address-item">
                          <div className="address-icon">
                              <img src="/images/2.png" alt="Images" />
                          </div>
                          <div className="address-text text-md-left">
                              <h3 className="title">Email us</h3>
                              <p className="services-txt">  
                                  demo@evenio.org <br />
                                  demo2@evenio.org
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="widget-item">
                      <div className="widget-img">
                          <img src="/images/2-3.png" alt="Images" />
                      </div>
                      <div className="address-item">
                          <div className="address-icon">
                              <img src="/images/3.png" alt="Images" />
                          </div>
                          <div className="address-text text-md-left">
                              <h3 className="title">Call us</h3>
                              <p className="services-txt">  
                                  <a href="tel:(+088)589-8745">(+088) 589-8745</a><br />
                                  <a href="tel:(+088)222-9999">(+088) 222-9999</a>
                              </p>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>            
      </div>
    </>
  )
}


export default EventLocation