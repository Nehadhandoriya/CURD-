import { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,

} from "@mui/material";

import { getUsers, deleteUser } from "../Service/api";
import { Link } from "react-router-dom";


const Alluser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };
  
 const deleteUserData = async (id) =>{
await deleteUser(id);
getUsersDetails();
 }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id </TableCell>
          <TableCell>Name </TableCell>
          <TableCell>Username </TableCell>
          <TableCell>Email </TableCell>
          <TableCell>Phone </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.Username}</TableCell>
            <TableCell>{user.Email}</TableCell>
            <TableCell>{user.Phone}</TableCell>
            <TableCell>
              <Button variant="contained" color="error"
               onClick={()=> deleteUserData(user.id)}>Delete</Button>
              <Button variant="contained" color="warning" component={Link} 
              to={`/edit/${user.id}`}>Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      

    </Table>
  );
};

export default Alluser;
