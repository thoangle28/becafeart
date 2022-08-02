import React from "react";
import { Route, Routes } from "react-router-dom";

/*-------------------------------------------*/
import Home from './home/Home';
import Page from './page/page';

import Events from './events/events';
import EventDetail from './events/event';

import Blogs from './blogs/blogs';
import BlogCategories from './blogs/category';
import BlogDetail from './blogs/blog';

import Videos from './videos/videos';
import VideoDetail from './videos/video';
import VideoCategories from "./videos/category";

const Layout = () => {
  return (    
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* Pages */}          
      <Route path="/:page" element={<Page />} />
      {/* Blog */}
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:category" element={<BlogCategories />} /> 
      <Route path="/blog/:category/:blog" element={<BlogDetail />} /> 
      {/* Events */}
      <Route exact path='/events' element={<Events />} />
      <Route exact path='/event/:event' element={<EventDetail />} />
      {/* Videos */}
      <Route exact path='/videos' element={<Videos />} />
      <Route exact path='/video/:category' element={<VideoCategories />} />
      <Route exact path='/video/:category/:video' element={<VideoDetail />} />
    </Routes>
  )
}


export default Layout;