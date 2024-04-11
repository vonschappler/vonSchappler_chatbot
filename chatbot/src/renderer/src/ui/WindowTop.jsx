import { Grid, ButtonGroup, Avatar } from "@mui/material";
import { Close, Minimize, OpenInFull } from "@mui/icons-material";

import MenuBarButton from "./MenuBarButton";

const Menubar = ({ title, className = "" }) => {
  const handleClose = () => {
    window.electron.ipcRenderer.send("close");
  };

  return (
    <Grid
      container
      className="menubar pointer-events-auto flex select-none flex-row items-center justify-between text-von-lightGray"
    >
      <Grid item className="flex flex-row items-center gap-4 font-title">
        <Avatar variant="square" src="/img/vonBow_v2.png" />
        {title}
      </Grid>
      <Grid item>
        <ButtonGroup variant="text" aria-label="Basic button group">
          <MenuBarButton className="minusButton">
            <Minimize />
          </MenuBarButton>
          <MenuBarButton className="restoreButton">
            <OpenInFull />
          </MenuBarButton>
          <MenuBarButton className="closeButton" onClick={handleClose}>
            <Close />
          </MenuBarButton>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Menubar;
