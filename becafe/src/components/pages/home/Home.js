import React from "react";
import CountDownTimer from "./CountDown";
import EventSchedules from "./EventSchedules";
import NextEvent from "./NextEvent";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <>
        <div className="rs-about style1 bg19 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-50">
                    <span className="sub-text">// About Us</span>
                    <h2 className="title pb-25">
                        Everything You Need to Know<br />
                        About <span className="event-style">Evenio </span>Event
                    </h2>
                    <p className="desc-small title-color">On the other hand we denounce with righteous indignation and disen like men who are so <br /> beguiled and demoralized by the charms of pleasure of the moment so blinded by desire.</p>
                </div>
                <div className="rs-videos about-video home5-about-video">
                    <div className="animate-border">
                        <a className="popup-border" href="https://www.youtube.com/watch?v=FMvA5fyZ338">
                            <i className="fa fa-play"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <CountDownTimer />
        <NextEvent />
        <EventSchedules />
        <Blogs />
    </>
  )
}

export default Home;