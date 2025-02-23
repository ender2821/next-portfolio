import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

const StyledDrawer = styled(Drawer)(() => ({
  "&.MuiModal-root ": {
    gridGap: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    overflow: "auto",
    marginRight: "-4rem",
  },
  "& .MuiDrawer-paper": {
    background: "transparent",
    color: "black",
    width: "100%",
    position: "static",
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridColumnStart: 2,
    gridColumn: "span 6",
    pointerEvents: "none",
    boxShadow: "none",
  },
  "& div[data-testid='sentinelStart']": { pointerEvents: "none" },
  "& .MuiModal-backdrop": { backdropFilter: "blur(5px)" },
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
      <div
        className={
          "grid-cols-5 gap-4 mg-8 grid bg-[#fff] col-span-5 col-start-2 pointer-events-auto overflow-visible h-[100vh] shadow-drawer"
        }
      >
        {children}
      </div>
    </StyledDrawer>
  );
}
