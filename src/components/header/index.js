import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
const Heading = () => {
  const products = useSelector((state) => state.productReducer.products);
  const cartItemCount = useSelector((state) => state.cartReducer.cart);
  return (
    <div className="container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="success">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Badge badgeContent={cartItemCount.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Heading;
