
const Footer = () => {
  return (
    <footer id="rs-footer" className="rs-footer style1">
    <div className="footer-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 md-mb-10">
                    <div className="footer-logo mb-40">
                        <a href="index.html"><img src="assets/images/logo-light2.png" alt="" /></a>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 pl-45 md-pl-15">
                            <h3 className="footer-title">Address</h3>
                            <div className="textwidget">2096 New Market, New Road
                            North Carolina, USA</div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 md-mb-10 pl-90 md-pl-15">
                            <h3 className="footer-title">Call Us</h3>
                            <div className="textwidget">
                                <a href="mailto:support@reactheme.com">support@reactheme.com</a><br />
                                <a href="tel:(+880)155-69569">(+880)155-69569</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 pl-115 md-pl-15">
                            <h3 className="footer-title">Follow Us</h3>
                            <ul className="footer-social">  
                                <li> 
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li> 
                                    <a href="#"><i className="fa fa-twitter"></i></a> 
                                </li>

                                <li> 
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                </li>

                                <li> 
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container">                    
            <div className="row y-middle">
                <div className="col-lg-6 md-mb-10 text-lg-end text-center order-last">
                    <ul className="copy-right-menu">
                        <li><a href="index2.html">Home2</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="schedule.html">Schedule</a></li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <div className="copyright text-lg-start text-center ">
                        <p>© 2021 Evenio, All Rights Reserved. Developed By<a href="https://reactheme.com"> reacthemes</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer