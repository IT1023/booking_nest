import { styled } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UIContext } from "../../context/MiniContext";

const LogoWrapper = styled(Link)({
  height: "90%",
  overflow: "hidden",
  padding: "10px",
});

export default function Logo() {
  const { currentTheme } = useContext(UIContext);

  return (
    <LogoWrapper to={"/"} aria-label="Home - Booking Nest">
      <img
        src={`/img/logo_${currentTheme}.png`}
        alt="Booking Nest"
        width={"100%"}
        height={"100%"}
        style={{ scale: "2" }}
      />
    </LogoWrapper>
  );
}
