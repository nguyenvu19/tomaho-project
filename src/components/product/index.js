import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Input from "antd/lib/input/Input";
import "./index.css";
import * as Actions from "../../redux/actions";
import { useNavigate } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.productReducer.products);
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [inputs, setInputs] = useState();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAddProduct = (e) => {
    setOpen(false);
    dispatch({ type: "CREATE_NEW_PRODUCT", payload: inputs });
    console.log(dispatch.payload);
  };

  function handleInput(e) {
    const nameInput = e.target.name;
    const value = e.target.value;

    setInputs((state) => ({ ...state, [nameInput]: value }));
  }

  function handleAddToCart(product) {
    const data = { product: product, quantity: qty };
    dispatch({ type: Actions.UPDATE_CART, payload: data });
    setQty(1);
    navigate("/cart");
  }

  function handleQuantity(e) {}

  function handleUp(e) {
    let cloneProduct = [...products];
    // console.log(
    //   cloneProduct.map((value) => {
    //     console.log(value.id.toString());
    //     return value === value.id;
    //   })
    // );
    cloneProduct.map((value) => {
      console.log(value.id);
      console.log(e.target.id);
      if (e.target.id == value.id) {
        setQty((pre) => pre + 1);
      }
    });
  }
  function handleDown(e) {
    if (qty > 1) {
      setQty((pre) => pre - 1);
    }
  }
  return (
    <div className="container">
      {/* modal add product */}
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add product</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleInput}
            />
            <TextField
              autoFocus
              margin="dense"
              id="price"
              name="price"
              label="Price"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleInput}
            />
            <TextField
              autoFocus
              margin="dense"
              id="image"
              name="image"
              label="Image"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleInput}
            />
            <TextField
              autoFocus
              margin="dense"
              id="tax"
              name="tax"
              label="Tax"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleInput}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAddProduct}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>

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
            {products &&
              products.map((product) => {
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
                    <TableCell align="center">
                      <Button onClick={handleUp} id={product.id}>
                        <AddIcon />
                      </Button>
                      <Input
                        value={qty}
                        type="text"
                        readOnly
                        onChange={(e) => handleQuantity(e)}
                        id="amount"
                        name="amount"
                        autoFocus
                        size="small"
                        fullWidth={false}
                      />
                      <Button onClick={handleDown} id={product.id}>
                        <RemoveIcon />
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        onClick={() => handleAddToCart(product)}
                        color="success"
                        id={product.id}
                      >
                        Add to cart
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>

      <h2>Add new Product</h2>
      <br></br>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Add new product
      </Button>
    </div>
  );
};

export default ProductComponent;
