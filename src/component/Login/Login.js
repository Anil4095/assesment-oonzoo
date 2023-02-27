import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
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
  checkboxSelection: {
    marginLeft: "70%",
  },
}));

const Login = () => {
  const classes = useStyle();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const isChecked = () => {
    setIsSelected(!isSelected);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if(email === ""){
      alert ("Email must not be Empty")
    }else if(password=== ""){
      alert ("Password must not be Empty")
    }else{
      alert("Log in Successfull")
    }
    const payload = {
      email: email,
      passeord: password,
    };
    console.log("payload of login :", payload);
  };
  
  
  
  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align="center">
          <Avatar className={classes.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          className={classes.checkboxSelection}
          control={
            <Checkbox
              name="checkedB"
              color="primary"
              onChange={() => isChecked()}
            />
          }
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.btnstyle}
          fullWidth
          onClick={(e) => handleClick(e)}
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
