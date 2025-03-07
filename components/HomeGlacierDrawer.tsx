import { useMediaQuery } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";

interface HomeGlacierDrawerProps {
  isOpen: boolean;
  toggleDrawer: (open: boolean) => () => void;
  children?: React.ReactNode;
}

export default function HomeGlacierDrawer(props: HomeGlacierDrawerProps) {
  const { isOpen, toggleDrawer, children } = props;

  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));

  const StyledDrawer = styled(Drawer)(() => ({
    "&.MuiModal-root ": {
      gridGap: "0 1rem",
      paddingLeft: `${lg ? "2rem" : 0}`,
      paddingRight: `${lg ? "2rem" : 0}`,
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      overflow: "auto",
      marginRight: `${lg ? "-2rem" : 0}`,
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

  return (
    <StyledDrawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
      <div
        className={
          "pl-4 pr-4 min-h-[100vh] col-span-6 md:grid-cols-5 md:-ml-4 md:pl-4 gap-4 mg-8 grid bg-[#fff] md:col-start-2 pointer-events-auto overflow-visible shadow-drawer lg:pr-8 lg:pt-[6.25rem] "
        }
      >
        {children}
      </div>
    </StyledDrawer>
  );
}
