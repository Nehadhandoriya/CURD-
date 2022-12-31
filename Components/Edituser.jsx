import {useState, useEffect} from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography,Button , styled} from '@mui/material';
import {getUser , editUser} from '../Service/api';
import { useNavigate, useParams } from 'react-router-dom';
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

const Edituser = () => {
    const [user, setUser]= useState(InitialValue);

    const navigate = useNavigate();

    const {id} = useParams();

 useEffect(()=>{
   getUserData();  
 }, [])

 const getUserData =async ()=>{
    let response = await getUser(id);
    console.log(response);
  setUser(response.data);
 }

    const onValueChange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user);
    }

    const addUserDetails = async () =>{
       await editUser(user, id);
       navigate("/all")
    }
  return (
    <div>
<Container>
    <Typography variant='h4'>Edit User</Typography>
    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
    </FormControl>
    <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="Username" value={user.Username}/>
    </FormControl>
    <FormControl>
        <InputLabel >Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="Email" value={user.Email}/>
    </FormControl>
    <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input  onChange={(e)=>onValueChange(e)} name="Phone" value={user.Phone}/>
    </FormControl>
</Container>
<FormControl>
    <Button onClick={()=> addUserDetails()} variant='contained' >Edit</Button>
</FormControl>
    </div>
  )
}

export default Edituser;