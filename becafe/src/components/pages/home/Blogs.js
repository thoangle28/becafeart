import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Blogs = () => {
  const latestNews = [
    {
      title: "What Do Live Music Fan Think About This First Month",
      image: "/images/blog-3.jpg",
      link: "/blog/live-music/what-do-live-fan-think-about-this-first-month",
    },
    {
      title: "What Do Live Music Fan Think About This First Month",
      image: "/images/blog-3.jpg",
      link: "/blog/live-music/what-do-live-fan-think-about-this-first-month",
    },
    {
      title: "What Do Live Music Fan Think About This First Month",
      image: "/images/blog-3.jpg",
      link: "/blog/live-music/what-do-live-fan-think-about-this-first-month",
    },
    {
      title: "What Do Live Music Fan Think About This First Month",
      image: "/images/blog-3.jpg",
      link: "/blog/live-music/what-do-live-fan-think-about-this-first-month",
    },
  ];

  return (
    <div
      id="rs-blog"
      className="rs-blog blog-main-home bg9 pt-110 pb-120 md-pt-70 md-pb-80"
    >
      <div className="container">
        <div className="sec-title text-center mb-85 md-mb-50">
          <span className="sub-text small">Our Blog</span>
          <h2 className="title pb-26">Latest News &amp; Blog</h2>
          <div className="heading-border-line"></div>
        </div>
        <div className="rs-carousel">
          <OwlCarousel items={3} margin={30} autoplay={true}>
            {latestNews &&
              latestNews.map((item, i) => {
                return (
                  <div className="blog-item">
                    <div className="image-wrap">
                      <a href="blog-details.html">
                        <img src="/images/blog-3.jpg" alt="Blog" />
                      </a>
                      <div className="blog-date">
                        <span className="day">05</span>
                        <span className="month">May</span>
                      </div>
                    </div>
                    <div className="blog-content text-md-left">
                      <h3 className="blog-title">
                        <a href={ item.link }>{ item.title }</a>
                      </h3>
                      <div className="blog-button">
                        <a href={ item.link }>
                          <span className="btn-txt">Read More</span>
                          <i className="fa fa fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
