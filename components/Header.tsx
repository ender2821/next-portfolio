"use client";

import type React from "react";

import { useState } from "react";
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
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
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

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsOpen(open);
    };

  return (
    <header className="w-full bg-black relative">
      <div className="mx-auto px-6 h-16 flex items-center">
        {/* Desktop Navigation */}
        <nav className="flex-1 hidden md:block">
          <ul className="flex gap-8">
            {menuItems.map((item) => {
              return (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logo - Centered on all screen sizes */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10"
            priority
          />
        </div>

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
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
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
