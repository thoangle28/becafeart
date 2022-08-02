import React from "react"
import { useLocation } from "react-router-dom"

import Home from "./Home"
import Blog from "./Blog"
import Event from "./Event"
import Page from "./Page"

import Register from "../pages/register/Banner"
import PageNotFound from '../pages/404/Banner'
import About from '../pages/about/banner'

const Banner = () => {

    const location = useLocation()
    const currentHref = location.pathname.substr(1)
    const currentPage = (currentHref) ? currentHref.split('/') : ''   

    return(
        <>
        { ( !currentPage && <Home />) ||
            ( currentPage && (currentPage[0] === 'blogs' || currentPage[0] === 'blog')  && <Blog /> ) ||
            ( currentPage && (currentPage[0] === 'events' || currentPage[0] === 'event')  && <Event /> ) ||
            ( currentPage && (currentPage[0] === 'register')  && <Register /> ) ||  
            ( currentPage && (currentPage[0] === 'be-cafe')  && <About /> ) ||              
            ( currentPage && (currentPage[0] === 'page-not-found')  && <PageNotFound /> ) ||  
        ( currentPage && currentPage[0]  && <Page />) }
        </>
    )
}

export default Banner