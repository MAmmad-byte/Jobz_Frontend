import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";
import { checkIsEmployee, checkUser, getUserInfo } from "../services/authServices";
import { MdFindInPage } from "react-icons/md";
export default function NavBar() {
  return (
    <Box width="100%" height="50px" background="#2C7A7B">
      <Box
        display="flex"
        alignItems="center"
        p={1}
        justifyContent="space-between"
        m="auto"
        height="100%"
        // border="1px solid tomato"
        maxWidth="1400px"
      >
        <Heading display={"flex"} alignItems={"center"} fontSize={30} color={"#fff"}>
        <MdFindInPage color="#E6FFFA" size={40} />
          Jobz
        </Heading>
        <ul className="nav-list">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/jobs"}>Jobs</Link>
          </li>
          {
            checkIsEmployee() &&
            <li>
            <Link to={"/admin/job/new"}>Create Job</Link>
          </li>
          }
          {checkUser() ? (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
            </>
          ) : (
            <li>
              <ProfileIcon name={getUserInfo().firstName} />
            </li>
          )}
            {/* <li>
            <Link to={"/admin/job/new"}>Create Job</Link>
            </li> */}

        </ul>
      </Box>
    </Box>
  );
}
