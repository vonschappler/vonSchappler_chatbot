import { NavLink } from "react-router-dom";

const Sidebar = ({ className = "" }) => {
  return (
    <aside className={`sideBar ${className}`}>
      <NavLink to="/">Console</NavLink>
      <NavLink to="/commands">Commands</NavLink>
    </aside>
  );
};

export default Sidebar;
