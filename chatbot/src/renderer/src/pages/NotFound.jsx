import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <Button onClick={handleGoBack}>Voltar (pagina nao encontrada) </Button>
  );
};

export default NotFound;
