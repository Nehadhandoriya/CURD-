import React from 'react';
import {AppBar, Toolbar , styled} from "@mui/material";
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background-color: #111111;
   
`
const Tabs = styled(NavLink)`
    font-size:20px;
    padding:5px;
    margin:2px;
    color:white;
    text-decoration:none;
`
const Navbar =() =>{
  return (
   <Header position='static'>
    <Toolbar>
        <Tabs to="/">Home</Tabs>
        <Tabs to="/all">All user</Tabs>
        <Tabs to="/add">Add user</Tabs>
    </Toolbar>
   </Header>
  )
}

export default Navbar;