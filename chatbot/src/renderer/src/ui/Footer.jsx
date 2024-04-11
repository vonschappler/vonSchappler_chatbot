import { Grid } from "@mui/material";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`${className}`}>
        <span className="grow">Page name</span>
        <span >Version: 1.0.0</span>
    </footer>
  );
};

export default Footer;
