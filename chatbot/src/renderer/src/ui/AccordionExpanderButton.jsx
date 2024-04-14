import { KeyboardArrowUp, KeyboardArrowRight } from "@mui/icons-material";

const AccordionExpanderButton = ({ expanded }) => {
  return <>{!expanded ? <KeyboardArrowRight /> : <KeyboardArrowUp />}</>;
};

export default AccordionExpanderButton;
