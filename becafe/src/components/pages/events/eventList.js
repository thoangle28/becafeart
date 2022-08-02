import { Link } from 'react-router-dom'

const EventsList = () => {

  const EventsList = [
    { 
      title: 'ICC Wales Reports Record Breaking Summer', 
      date: 'Octobor 26, 2021', 
      desc: 'We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...', 
      link: '/event/icc-wales-reports-record-breaking-summer',
      thumbnail: ''
    },
    { 
      title: 'ICC Wales Reports Record Breaking Summer', 
      date: 'Octobor 26, 2021', 
      desc: 'We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...', 
      link: '#',
      thumbnail: ''
    },
    { 
      title: 'ICC Wales Reports Record Breaking Summer', 
      date: 'Octobor 26, 2021', 
      desc: 'We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...', 
      link: '#',
      thumbnail: ''
    },
    { 
      title: 'ICC Wales Reports Record Breaking Summer', 
      date: 'Octobor 26, 2021', 
      desc: 'We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...', 
      link: '#',
      thumbnail: ''
    },
    { 
      title: 'ICC Wales Reports Record Breaking Summer', 
      date: 'Octobor 26, 2021', 
      desc: 'We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...', 
      link: '#',
      thumbnail: ''
    },
    { 
      title: 'ICC Wales Reports Record Breaking Summer', 
      date: 'Octobor 26, 2021', 
      desc: 'We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...', 
      link: '#',
      thumbnail: ''
    }
  ]

  return(
    <>
      <div className='pt-120 pb-120 md-pt-80 md-pb-80 bg5'>
          <div className='container'>
            <div class="sec-title text-center mb-85 md-mb-50">
              <span class="sub-text">Join Event</span>
              <h2 class="title pb-26">
                  Latest Events
              </h2>
              <div class="heading-border-line"></div>
          </div>
            <div className="row">
              { EventsList && EventsList.map((item, i) => {

                return (
                  <div className="col-md-6 mb-5">
                      <div className="blog-item">
                          <div className="blog-img mb-4">
                            <Link to={ item.link }><img src={"/images/event-" + (i + 1) + ".jpg"} alt="" /></Link>                              
                          </div>
                          <div className="blog-content text-md-left">
                              <h3 className="blog-title"><Link to={ item.link }>{ item.title }</Link></h3>
                              <div className="blog-meta mb-3">
                                <i className="fa fa-calendar-check-o"></i> { item.date }
                              </div>
                              <div className="blog-desc mb-3">   
                                { item.desc } 
                              </div>
                              <div className="blog-button">
                                  <Link to={ item.link }>
                                      <span className="btn-txt white-color">Read More</span>
                                      <i className="fa fa fa-chevron-right"></i>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
                )

              })}                
            </div>
          </div>
        </div>
    </>
  )
}

export  default EventsList