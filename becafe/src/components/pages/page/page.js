import React from "react";
import { useLocation } from "react-router-dom"

import Register from './Register'
import About from '../about/about'

const Page = () => {

  const location = useLocation()
  const currentHref = location.pathname.substr(1)
  
  const DisplayPage = ({ page }) => {

    switch(page) {
      case 'be-cafe':
        return <About />
    }
  }

  return (
    <div className="page">
      <DisplayPage page={currentHref} />
    </div>
  )
}

export default Page;