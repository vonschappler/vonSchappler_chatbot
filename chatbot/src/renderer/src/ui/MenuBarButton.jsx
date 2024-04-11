import { IconButton as BaseButton } from "@mui/material";
import { forwardRef } from "react";

const MenuBarButton = ({ startIcon, children, className = "", ...props }) => {
  return (
    <BaseButton className={` ${className}`} {...props}>
      {children}
    </BaseButton>
  );
};

export default MenuBarButton;
