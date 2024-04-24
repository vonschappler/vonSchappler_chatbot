import {
  Accordion as BaseAccordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { useState } from "react";

import AccordionExpanderButton from "./AccordionExpanderButton";

const Accordion = ({
  title,
  height = 30,
  children,
  expanded = true,
  background = "transparent",
  ...props
}) => {
  const [open, setOpen] = useState(expanded);
  const handleClick = () => {
    setOpen((cur) => !cur);
  };
  return (
    <BaseAccordion expanded={open} disableGutters square className="accordion">
      <AccordionSummary
        expandIcon={<AccordionExpanderButton expanded={open} />}
        onClick={handleClick}
        sx={{
          maxHeight: `${height}px`,
          minHeight: `${height}px`,
        }}
      >
        <span>{title}</span>
      </AccordionSummary>
      <AccordionDetails className={`!m-0 !p-0 ${background}`}>
        {children}
      </AccordionDetails>
    </BaseAccordion>
  );
};

export default Accordion;
