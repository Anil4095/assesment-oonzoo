import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  makeStyles,
  Link,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyle = makeStyles(() => ({
  paperStyle: { padding: "30px 20px", width: "40%", margin: "100px auto" },
  headerStyle: {
    margin: 0,
  },
  avatarStyle: {
    backgroundColor: "#1bbd7e",
  },
  marginTop: {
    marginTop: 5,
  },
}));

const Signup = () => {
  const classes = useStyle();
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [number, setNumber] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [isSelected, setIsSelected] = useState(false);

const isChecked =()=>{
    setIsSelected(!isSelected)
}

const handleClick = (e)=>{
    e.preventDefault();
    const payload = {name: name, email:email, number:number, password:password, confirmPassword: confirmPassword}
    console.log("payload: ", payload)
    if(name === ""){
      alert("Name must not be empty")
    }else if( email === ""){
      alert("Email must not be empty")
    }else if(number === ""){
      alert("Number must not be empty")
    }else if(password === ""){
      alert("Password must not be empty")
    }else if(confirmPassword === ""){
      alert("Confirm Password must not be empty")
    }else{
      alert("Sign up Successfull")
    }
      
}

// console.log("is Selected value: ", isSelected)
  return (
    <Grid>
      <Paper elevation={20} className={classes.paperStyle}>
        <Grid align="center">
          <h2 className={classes.heclassName}>Sign Up</h2>
        </Grid>
        <form>
          <TextField fullWidth label="Name" placeholder="Enter your name"  onChange={(e)=> setName(e.target.value)}/>
          <TextField fullWidth label="Email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/>
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
            onChange={(e)=>setNumber(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
            onChange={(e)=> setConfirmPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" onChange={()=> isChecked()}/>}
            label="I accept the terms and conditions."
          />
          <Button type="submit" variant="contained" color="primary"  onClick={(e)=>handleClick(e)}>
            Sign up
          </Button>
        </form>
        <Typography>
          {" "}
          Already Register  ?<Link href="/login">Sign in</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signup;
