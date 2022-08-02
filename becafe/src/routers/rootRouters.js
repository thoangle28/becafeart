
<Router>
  <Routes>
    <Route exact path="/" element={<Home />} >
      {/* Pages */}
      {/* Events */}
      <Route path='events' element={<Events />}>
        <Route path=':event' element={<Event />} />
      </Route>
      {/* Blog */}
      <Route path="blogs" element={<Blogs />}>
        {/*  <Route path=":categoris" element={<Category />}>
          <Route path=":" element={<Term />} />
        </Route> */}
      </Route>
    </Route>
  </Routes>
</Router>