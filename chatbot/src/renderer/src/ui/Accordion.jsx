import {
  Accordion as BaseAccordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { useState } from "react";

import AccordionExpanderButton from "./AccordionExpanderButton";

const Accordion = ({ title, height = 30, children }) => {
  const [expanded, setExpanded] = useState(true);
  const handleClick = () => {
    setExpanded((cur) => !cur);
  };
  return (
    <BaseAccordion
      expanded={expanded}
      disableGutters
      square
      className="accordion"
    >
      <AccordionSummary
        expandIcon={<AccordionExpanderButton expanded={expanded} />}
        onClick={handleClick}
        sx={{
          maxHeight: `${height}px`,
          minHeight: `${height}px`,
        }}
      >
        <span>{title}</span>
      </AccordionSummary>
      <AccordionDetails className="!p-0">{children}</AccordionDetails>
    </BaseAccordion>
  );
};

export default Accordion;
