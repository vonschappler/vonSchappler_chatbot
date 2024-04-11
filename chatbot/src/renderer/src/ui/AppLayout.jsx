import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

import Menubar from "./Menubar";
import WindowTop from "./WindowTop";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      {/* <Menubar /> */}
      <WindowTop title={document.title} />
      <Main className=" text-von-lightGray">
        <Sidebar className="space-y-3 p-3" />
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default AppLayout;
