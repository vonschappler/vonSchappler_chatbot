import { AppBar, Button, Grid, Toolbar, ButtonGroup } from "@mui/material";
import {
  Close,
  CloseFullscreenOutlined,
  Minimize,
  OpenInFull,
} from "@mui/icons-material";

import MenuBarButton from "./MenuBarButton";

const Menubar = ({ className = "" }) => {
  return (
    <Grid
      container
      className="menubar flex flex-row items-center justify-between"
    >
      <Grid item>
        <AppBar className={` ${className}`} position="static" enableColorOnDark>
          <Toolbar>Test test 2</Toolbar>
        </AppBar>
      </Grid>
      <Grid item>
        <ButtonGroup variant="text" aria-label="Basic button group">
          <MenuBarButton className="minusButton">
            <Minimize />
          </MenuBarButton>
          <MenuBarButton className="restoreButton">
            <OpenInFull />
          </MenuBarButton>
          <MenuBarButton
            className="closeButton"
            // startIcon={<Close />}
          >
            <Close />
          </MenuBarButton>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Menubar;
