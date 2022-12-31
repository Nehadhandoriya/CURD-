import {useState} from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography,Button , styled} from '@mui/material';
import {addUser} from '../Service/api';
import { useNavigate } from 'react-router-dom';
const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    & > div{
    margin-top:20px
    };

`
const InitialValue ={
    name:"",
    Username:"",
    Email:"",
    Phone:""

}
const Adduser =() => {
    const [user, setUser]= useState(InitialValue);

    const navigate = useNavigate();

    const onValueChange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
    }
    const addUserDetails = async () =>{
       await addUser(user);
       navigate("/all")
    }
    
  return (
    <div>
<Container>
    <Typography variant='h4'>Add User</Typography>
    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="name"/>
    </FormControl>
    <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="Username"/>
    </FormControl>
    <FormControl>
        <InputLabel >Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="Email"/>
    </FormControl>
    <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input  onChange={(e)=>onValueChange(e)} name="Phone"/>
    </FormControl>
</Container>
<FormControl>
    <Button onClick={()=> addUserDetails()} variant='contained' >Submit</Button>
</FormControl>
    </div>
  )
}

export default Adduser;