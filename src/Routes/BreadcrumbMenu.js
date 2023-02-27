import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box, Button, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';


const useStyle = makeStyles(() => ({
  mainContainer: { padding: "10px 10px", width: "100%", },
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


const BasicBreadcrumbs =()  =>{
  const classes = useStyle()
  return (
    <div role="presentation" className={classes.mainContainer}>
      <Breadcrumbs aria-label="breadcrumb">
        
        <Typography>All Category </Typography>
        <Button underline="hover" color="inherit" href="/">
          Home
        </Button>
        <Button
          underline="hover"
          color="inherit"
          href="/productlist"
        >
          Product
        </Button>
      </Breadcrumbs>
    </div>
  );
}

export default BasicBreadcrumbs
