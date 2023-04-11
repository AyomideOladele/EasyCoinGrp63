// Import React library, necessary components/modules, and style sheet
import { Link } from "react-router-dom";
import "./style/navbar.css"

const NavBarItem = ({ title }) => (

  // Wrap the NavBarItem component for "Market" with a Link component
  <li>
    {title === "Market" ? (
      <Link to="/market">{title}</Link>
    ) : (
      title
    )}
  </li>
);

const Navbar = () => {

  return (
    <nav>
      <ul>
        <li>
          {["Market"].map((item, index) => (
            <NavBarItem
              key={item + index}
              title={item} />
            ))}
        </li>
        <li>
           <a> Settings</a>
        </li>
        <li>
          <a> Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
