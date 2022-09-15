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
  console.log(cart);
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
              cart.map((product) => {
                return (
                  <TableRow
                    key={product.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="product" id={product.id}>
                      {product.id}
                    </TableCell>
                    <TableCell align="center">{product.name}</TableCell>
                    <TableCell align="center">{product.price}</TableCell>
                    <TableCell align="center">
                      <img
                        src={product.image}
                        width="40px"
                        height="40px"
                        alt={product.name}
                      />
                    </TableCell>
                    <TableCell align="center">{product.tax}</TableCell>
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
