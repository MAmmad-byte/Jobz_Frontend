import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { checkIsEmployee } from "../services/authServices";

export default function ProfileIcon({ name }) {
  return (
    <Menu>
      <MenuButton
        p="3px 10px"
        borderRadius={5}
        fontSize={15}
        background={"#2F855A"}
      >
        {name}
      </MenuButton>
      <MenuList color={"#000"}>
        <MenuGroup title="Profile">
          <MenuItem>
            <Link to={"/dashboard"}>Dashboard</Link>
          </MenuItem>
          {
            (checkIsEmployee()) &&
          <Link to="/admin/allUsers">
            <MenuItem>All Users</MenuItem>
          </Link>
          }
          {/* <MenuItem>Payments </MenuItem> */}
        </MenuGroup>
        <MenuDivider />
        {/* <MenuGroup title="Services"> */}
          {/* <MenuItem>Docs</MenuItem> */}
          <MenuItem>
            <Link to="/logout">Logout</Link>
          </MenuItem>
        {/* </MenuGroup> */}
      </MenuList>
    </Menu>
  );
}
