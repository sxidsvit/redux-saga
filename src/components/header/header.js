import { NavLink } from "react-router-dom";

import './header.css';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Top Headlines', path: '/top-headlines' },
  { id: 3, title: 'Bitcoin News', path: '/popular-news' },
];

const Header = () => (
  <header>
    <nav className="nav">
      <div className="links">
        {navigation.map(({ id, title, path }) => (
          <NavLink key={id} to={path} exact={true}>{title}</NavLink>
        ))}
      </div>
    </nav>
  </header>
);

export default Header;
