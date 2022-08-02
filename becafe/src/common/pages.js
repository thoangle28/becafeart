
function PagesList() {

  const StaticPages = [
    { name: 'Home', path: '/'},
    { name: 'Be Cafe', path: '/be-cafe'},
    { name: 'Events', path: '/events'},
    { name: 'Blogs', path: '/blogs'},
    { name: 'Contact', path: '/contact'},
    { name: 'Register', path: '/register'},
  ]

  return StaticPages;
}

export { PagesList }