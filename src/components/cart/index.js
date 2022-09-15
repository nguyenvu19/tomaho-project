import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import React, { useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import "./index.css";
const CartComponent = () => {
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ maxwidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID </TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Tax(%)</TableCell>
              <TableCell align="center">Mount</TableCell>
              <TableCell align="center">Add to Cart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart &&
              cart.map((cart) => {
                if (cart) {
                  cart.quantity += 1;
                  console.log(cart);
                }
                return (
                  <TableRow
                    key={cart.product.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="cart" id={cart.id}>
                      {cart.product.id}
                    </TableCell>
                    <TableCell align="center">{cart.product.name}</TableCell>
                    <TableCell align="center">{cart.product.price}</TableCell>
                    <TableCell align="center">
                      <img
                        src={cart.product.image}
                        width="40px"
                        height="40px"
                        alt={cart.product.name}
                      />
                    </TableCell>
                    <TableCell align="center">{cart.product.tax}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CartComponent;
