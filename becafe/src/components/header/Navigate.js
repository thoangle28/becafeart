import { NavLink, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { PagesList } from "../../common/pages"

const MenuItem = ({to, children, ...props}) => { 
  const location = useLocation()
  const currentHref = location.pathname.substr(1)
  const currentPage = (currentHref) ? currentHref.split('/') : ''

  let activeMenuItem = false
  switch (to.substr(1)) {
    case 'blogs':
      activeMenuItem = currentPage && currentPage[0] === 'blog';
      break;

    case 'events':
      activeMenuItem = currentPage && currentPage[0] === 'event';
      break;

    default:
      break;
  }

  const activeClass = ({ isActive }) => {    
    return (isActive) ? 'nav-link active' : ''
  }
  
  const currentMenuItemClass = ( isActive ) => {
    return (isActive || activeMenuItem) ? 'menu-item current-menu-item' : 'menu-item'
  }

  const resolved = useResolvedPath(to);
  const matched = useMatch({ path: resolved.pathname, end: true });

  return(
    <li className={ currentMenuItemClass(matched) } key={props.key}>
      <NavLink to={to} className={activeClass} {...props}>{children}</NavLink>
    </li>
  )
}

const Navigate = () => {
  const Navbar = PagesList()
  
  return (
    <div className="rs-menu-area">
      <div className="main-menu">
        <nav className="rs-menu hidden-md">
          <ul className="nav-menu">
            {
              Navbar.map((item, i) => {
                return(
                  <MenuItem to={ item.path } key={i}>
                    {item.name }
                  </MenuItem>
                )
              })
            }  
          </ul>
        </nav>        
      </div>
    </div>
  );
};

export default Navigate;
