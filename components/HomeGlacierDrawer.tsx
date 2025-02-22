import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

const StyledDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "white",
    color: "black",
    gridColumn: "span 5",
    position: "static",
    height: "100vh",
    marginRight: "-2rem",
  },
  "& div[data-testid='sentinelStart']": { pointerEvents: "none" },
  "&.MuiModal-root ": {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridGap: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
}));

interface HomeGlacierDrawerProps {
  isOpen: boolean;
  toggleDrawer: (open: boolean) => () => void;
  children?: React.ReactNode;
}

export default function HomeGlacierDrawer(props: HomeGlacierDrawerProps) {
  const { isOpen, toggleDrawer, children } = props;
  return (
    <StyledDrawer
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer(false)}
      sx={{}}
    >
      {children}
    </StyledDrawer>
  );
}
