import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();
  //console.log(new Date('2022/08/31 08:00:00').getTime())
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown]);

  return getCountDownDate(countDown);
};

const getCountDownDate = (countDown) => {
  //console.log(countDown)
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const ExpiredNotice = () => {
  return (
    <div className="expired-notice text-center">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const DisplayCountDown = ({ days, hours, minutes, seconds }) => {
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <>
      <div className="count-down mb-5">
        <div className="row">
          <div className="textDiv_Days col-12 col-md-3">
            <span>{days < 10 ? '0' + days : days}</span>
            <h4>Days</h4>
          </div>
          <div className="textDiv_Hours col-12 col-md-3">
            <span>{hours < 10 ? '0' + hours : hours}</span>
            <h4>Hours</h4>
          </div>
          <div className="textDiv_Minutes col-12 col-md-3">
            <span>{minutes < 10 ? '0' + minutes : minutes}</span>
            <h4>Minutes</h4>
          </div>
          <div className="textDiv_Seconds col-12 col-md-3">
            <span>{seconds < 10 ? '0' + seconds : seconds}</span>
            <h4>Seconds</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-12 mt-15">
        <div className="btn-part text-center">
          <Link className="readon btn-text btn-center" to={'/register'}>            
            <img src="/images/plus.png" alt="" />
            <span>Register Now</span>
          </Link>
        </div>
      </div>
      </>
    );
  }
};

const CountDownTimer = () => {
  const endDate = "2022/07/31 08:00:00";
  const textShowDate = 'July 31, 2022 - 08:00am'
  const [days, hours, minutes, seconds] = useCountdown(endDate);

  return (
    <div className="rs-timecoun-ceremony bg2 pt-120 pb-120 md-pt-80 md-pb-80">
      <div className="container">
        <div className="sec-title text-center mb-20">
          <span className="sub-text">Hurry Up</span>
          <h2 className="title white-color pb-27">
            Join The Conference Before
            <br />
            Registration Closed
          </h2>
          <div className="heading-border-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-counter5">
              <div className="timecounter-inner">             
                <div className="coming-soon-part">
                  <div className="coming-soon-text">
                    <div
                      data-animation-in="slideInLeft"
                      data-animation-out="animate-out fadeOut"
                      className="CountDownTimer"
                    >
                      {" "}
                      <div className="time_circles">
                        <div className="title white-color m-5">
                          <div>Begin Time</div>
                          <div className="time-start">{ textShowDate }</div>
                        </div>
                        <DisplayCountDown
                          days={days}
                          hours={hours}
                          minutes={minutes}
                          seconds={seconds}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
