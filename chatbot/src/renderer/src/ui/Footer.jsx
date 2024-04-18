import { useSelector } from "react-redux";

const Footer = ({ className = "" }) => {
  const { page } = useSelector((state) => state.viewSettings);
  return (
    <footer className={`${className}`}>
      <span className="grow">{page}</span>
      <span>Version: 1.0.0</span>
    </footer>
  );
};

export default Footer;
