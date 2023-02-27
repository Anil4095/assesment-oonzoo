import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { Button, makeStyles, SwipeableDrawer } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useSelector } from "react-redux";
import BasicBreadcrumbs from "./BreadcrumbMenu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {},
  },
}));
const useStyle = makeStyles(() => ({
  mainContainer: { backgroundColor: "yellow", color: "#000000" },
  searchContainer: {
    backgroundColor: "#ffffff",
    width: "100%",
  },
  avatarStyle: {
    backgroundColor: "#1bbd7e",
  },
  marginTop: {
    marginTop: 5,
  },
  drawerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  drawerInnerContainer: {
    display: "flex", 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems :"center"
  },
  drawerImage: {
    height:70,
    width :70
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center"
}));

export default function PrimarySearchAppBar() {
  const classes = useStyle();
  const cart = useSelector((state) => state.cart.cart);
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  console.log("cart item", product)
  const [state, setState] = React.useState({
    right: false,
  });

  console.log("select product", cart);

  const badgeCount = React.useMemo(() => {
    return cart?.length;
  }, [cart]);

  const toggleDrawer =
  (anchor, open) =>
  (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    </Box>
  );



  

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "yellow" }}>
      <AppBar position="static">
        <Toolbar className={classes.mainContainer}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            OONZOO
          </Typography>
          <Search>
            <StyledInputBase
              className={classes.searchContainer}
              placeholder="What are you looking for ?"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button href="/">Home</Button>
            <Button href="/productlist">Product</Button>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              href="/login"
            >
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <Button
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              href="/signup"
            >
              Signup
            </Button>
            {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={badgeCount} color="error">
                <ShoppingCartOutlinedIcon  onClick={()=>}/>
              </Badge>
            </IconButton> */}
            <div>
      {(['right']).map((anchor) => (
        <React.Fragment key={anchor}>
           <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={badgeCount} color="error">
                <ShoppingCartOutlinedIcon  onClick={toggleDrawer(anchor, true)}/>
              </Badge>
            </IconButton>
          {/* <Button >{anchor}</Button> */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >

            {list(anchor)}
              <div className={classes.drawerContainer}>
              <div className={classes.drawerInnerContainer}>
                <div><img className={classes.drawerImage}src={image}/></div>
                <div className={classes.cartItemDetails}>
                  <div>{title}</div>
                  <div>{price}</div>
                </div>
              </div>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>

          </Box>
        </Toolbar>
      </AppBar>
      {/* <BasicBreadcrumbs/> */}
      {/* {renderMobileMenu}
      {renderMenu} */}
    </Box>
  );
}
