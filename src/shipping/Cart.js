import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Button,
  ButtonBase,
  IconButton,
  Typography,
  TextField,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Delete as DeleteIcon } from "@material-ui/icons";
import Lottie from "react-lottie";

import Page from "../components/Page";

import cartAnimation from "../lotties/28383-cart-animation.json";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    marginBottom: 140.25,
  },
  decIncBtn: {
    width: 25,
    height: 25,
    border: "none",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },
  footer: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
    backgroundColor: theme.palette.background.paper,
  },
  couponCodeWrapper: {
    gap: 10,
    padding: 10,
  },
}));

export default function Cart() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [cartData, setCartData] = useState([
    {
      slug: "product1",
      title: "Product 1",
      image: "https://picsum.photos/100",
      quantity: 3,
      price: 250,
      attr: [{ Color: "White" }, { Size: "M" }],
    },
    {
      slug: "product2",
      title: "Product 2",
      image: "https://picsum.photos/100",
      quantity: 2,
      price: 150,
      attr: [{ Color: "White" }, { Texture: "Cotton" }, { Size: "M" }],
    },
    {
      slug: "product3",
      title: "Product 3",
      image: "https://picsum.photos/100",
      quantity: 1,
      price: 80,
    },
    {
      slug: "product4",
      title: "Product 4",
      image: "https://picsum.photos/100",
      quantity: 1,
      price: 80,
    },
  ]);

  const totalQuantity = cartData.reduce(
    (total, currentProduct) => total + currentProduct.quantity,
    0
  );

  const totalPrice = cartData.reduce(
    (total, currentProduct) =>
      total + currentProduct.price * currentProduct.quantity,
    0
  );

  const incrementQuantity = (item) => {
    setCartData([...cartData], {
      quantity: item.quantity < 10 ? item.quantity++ : item.quantity,
    });
  };

  const decrementQuantity = (item) => {
    setCartData([...cartData], {
      quantity: item.quantity > 1 ? item.quantity-- : item.quantity,
    });
  };

  const removeFromCart = (item) =>
    setCartData(cartData.filter((elem) => elem.slug !== item.slug));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cartAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Page
      title={`Cart (${totalQuantity} ${
        totalQuantity === 1 ? "item" : "items"
      })`}
      noCartBtn
    >
      <div className={classes.root}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">Total</Typography>
          <Typography variant="h6">${totalPrice}</Typography>
        </div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => (
            <>
              <Grid
                container
                xs
                alignItems="center"
                justifyContent="center"
                key={index}
              >
                <Grid item>
                  <ButtonBase onClick={() => navigate("/product/1")}>
                    <div className={classes.productImgWrapper}>
                      <img src={item.image} alt={item.title} />
                    </div>
                  </ButtonBase>
                </Grid>
                <Grid
                  item
                  direction="column"
                  alignItems="center"
                  justifyContent="flex-start"
                  style={{ flex: 1, padding: 5 }}
                >
                  <Typography
                    variant="body1"
                    onClick={() => navigate("/product/1")}
                  >
                    {item.title}
                  </Typography>
                  {item.attr &&
                    item.attr.map((item2, index2) => (
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        key={index2}
                      >
                        {Object.keys(item2)[0]}: {Object.values(item2)[0]}
                      </Typography>
                    ))}
                  <Grid
                    container
                    item
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    style={{ gap: 10 }}
                  >
                    <button
                      className={classes.decIncBtn}
                      onClick={() => decrementQuantity(item)}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className={classes.decIncBtn}
                      onClick={() => incrementQuantity(item)}
                    >
                      +
                    </button>
                    <div style={{ flex: 1 }}></div>
                    <IconButton
                      color="secondary"
                      aria-label="remove from cart"
                      onClick={() => removeFromCart(item)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Divider />
            </>
          ))
        ) : (
          <Lottie
            options={defaultOptions}
            height={window.innerWidth * 0.8}
            width={window.innerWidth * 0.8}
          />
        )}
      </div>
      <div className={classes.footer}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className="couponCodeWrapper"
        >
          <Grid item style={{ flex: 1 }}>
            <TextField type="text" label="Coupon code" fullWidth />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Apply
            </Button>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
          disabled={cartData.length > 0 ? false : true}
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </Button>
      </div>
    </Page>
  );
}
