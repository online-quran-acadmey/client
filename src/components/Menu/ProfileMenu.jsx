import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";


export default function ProfileMenu({ children, handelLogout }) {

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
