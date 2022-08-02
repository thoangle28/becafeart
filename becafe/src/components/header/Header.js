import React, { useEffect, useState }  from "react"
import Banner from '../banner/Banner'
import Navigate from "./Navigate"

const Header = () => {
  
  const [stickyMenu, setStickyMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setStickyMenu(window.scrollY > 20)
    })
  }, []);

  return (
    <>
      <div className="full-width-header"> 
          <header id="rs-header" className="rs-header header-transparent">           
              <div className={"menu-area menu-sticky" + (stickyMenu ? ' sticky' : '') }>
                  <div className="container">
                      <div className="row-table">
                          <div className="col-cell header-logo">                                  
                              <div className="logo-area">
                                  <a href={'/'} key="home">
                                  <img alt="Be Cafe" src={process.env.REACT_APP_PUBLIC_URL + "images/logo-black.png"} />
                                  </a>
                              </div>
                          </div>
                          <div className="col-cell">
                            <Navigate />
                          </div>    
                          <div className="col-cell">
                            <div className="expand-btn-inner">
                              <ul>
                                <li className="btn-quote">
                                    <a href="#ss" className="quote-button">Register</a>
                                </li>
                                <li className="humburger">
                                  <a id="nav-expander" className="nav-expander bar" href="#đ">
                                    <div className="bar">
                                      <span className="dot1"></span>
                                      <span className="dot2"></span>
                                      <span className="dot3"></span>
                                      <span className="dot4"></span>
                                      <span className="dot5"></span>
                                      <span className="dot6"></span>
                                      <span className="dot7"></span>
                                      <span className="dot8"></span>
                                      <span className="dot9"></span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>                 
                      </div>
                  </div>
              </div>               
          </header>
      </div>
      <Banner />
    </>
  )
}

export default Header