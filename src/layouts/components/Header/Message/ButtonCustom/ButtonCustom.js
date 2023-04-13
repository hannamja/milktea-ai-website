import { Button } from "@mui/material";

function ButtonCustom({ activeItem, onClick, children }) {
  return (
    <Button
      variant="text"
      sx={{
        width: "100%",
        borderRadius: "1px",
        color: activeItem === true ? "var(--primary)" : "#000",
        // fontSize: "1.4rem",
        height: "100%",
      }}
      onClick={activeItem ? () => {} : onClick}
    >
      {children}
    </Button>
  );
}

export default ButtonCustom;
