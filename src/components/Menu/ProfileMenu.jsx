import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import cookie from "react-cookies";

export default function ProfileMenu({ children }) {
  const handelLogout = () => {
    cookie.remove("token");
    cookie.remove("user");
    cookie.remove("tutor");
    window.location.href = "/";
  };

  return (
    <Menu>
      <MenuButton>{children}</MenuButton>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Complain</MenuItem>
        <MenuItem onClick={handelLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
