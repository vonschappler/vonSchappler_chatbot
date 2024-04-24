import { Tabs as BaseTabs, Tab } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import * as Icons from "@mui/icons-material";

import { useDispatch } from "react-redux";

import { menuSide } from "../constants/sidebarConstants";
import { forwardRef, useState } from "react";
import { setPage } from "../features/view/viewFeatures.slice";

const Tabs = forwardRef((props, ref) => {
  return <BaseTabs ref={ref} {...props} />;
});

Tabs.displayName = "Tabs";

const getIcon = (icon) => {
  const Icon = Icons[icon];
  return <Icon />;
};

const Sidebar = ({ reference, className = "", ...props }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [path, setPath] = useState(pathname);

  const hadleChangePath = (value, link) => {
    setPath(value);
    dispatch(setPage(link));
  };

  return (
    <aside className={`sideBar ${className}`}>
      <Tabs
        orientation="vertical"
        ref={reference}
        value={path}
        variant="scrollable"
        {...props}
      >
        {menuSide.map((menu, i) => {
          const { link, path, icon } = menu;
          return (
            <Tab
              key={i}
              label={link}
              to={path}
              LinkComponent={NavLink}
              icon={icon && getIcon(icon)}
              value={path}
              onClick={() => hadleChangePath(path, link)}
            />
          );
        })}
      </Tabs>
    </aside>
  );
};

export default Sidebar;
