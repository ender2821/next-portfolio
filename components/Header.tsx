"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";

// Custom styled MUI components
const StyledDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    width: 300,
    backgroundColor: "black",
    color: "white",
  },
}));

const MenuButton = styled(IconButton)(() => ({
  padding: "8px",
  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
}));

const menuItems = [
  { text: "Home", href: "/" },
  { text: "Work", href: "/work" },
  { text: "Services", href: "/services" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full bg-black relative border-b border-black-decoration relative">
      <div className="mx-auto flex items-center">
        {/* Desktop Navigation */}
        <nav className="flex-1 hidden md:block">
          <ul className="flex">
            {menuItems.map((item) => {
              return (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors text-sm pt-8 pb-8 block pl-6 pr-6"
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src={"/joshJensenCreativeLogo.svg"}
            alt={"Josh Jensen Creative"}
            width={50}
            height={50}
          />
        </Link>
        <p className="hidden sm:block text-xs text-black-decoration absolute bg-black-bg left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 mb-0 pr-2 pl-2 z-10">
          {`${width}px`}
        </p>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <MenuButton onClick={toggleDrawer(true)} aria-label="Open menu">
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-[#6ec9f2]"></div>
              <div className="w-6 h-0.5 bg-[#6ec9f2]"></div>
              <div className="w-6 h-0.5 bg-[#6ec9f2]"></div>
            </div>
          </MenuButton>
        </div>

        {/* Mobile Menu Drawer */}
        <StyledDrawer
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer(false)}
        >
          <List sx={{ pt: 4 }}>
            {["Home", "Work", "Services", "About", "Contact"].map((text) => (
              <ListItem
                key={text}
                sx={{
                  py: 2,
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                <Link
                  href={`/${text.toLowerCase() === "home" ? "" : text.toLowerCase()}`}
                  className="text-white hover:text-gray-300 transition-colors text-lg w-full"
                  onClick={toggleDrawer(false)}
                >
                  {text}
                </Link>
              </ListItem>
            ))}
          </List>
        </StyledDrawer>
      </div>
    </header>
  );
}
