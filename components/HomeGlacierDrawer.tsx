import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

const StyledDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "white",
    color: "black",
    width: "80%",
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
    <StyledDrawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
      {children}
    </StyledDrawer>
  );
}
