import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Button,
  ButtonBase,
  InputBase,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Grid,
  Card,
  CardActionArea,
  categoryMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  AddShoppingCart as AddShoppingCartIcon,
  Favorite as FavoriteIcon,
  Star as StarIcon,
} from "@material-ui/icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./css/Swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Page from "./components/Page";
import ProductCard from "./components/ProductCard";

const useStyles = makeStyles((theme) => ({
  mySwiper: {
    margin: `-${theme.spacing(1)}px -${theme.spacing(1)}px 0 -${theme.spacing(
      1
    )}px`,
  },
  topicWrapper: {
    marginTop: 30,
  },
  topicHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  showMoreBtn: {
    minWidth: 79,
  },
  categoryWrapper: {
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    overflowX: "auto",
    overflowY: "hidden",
    padding: "1px 0",
  },
  categoryCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryMedia: {
    width: 120,
    height: 120,
  },
}));

const CategoryItem = ({ title, image, url }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <ButtonBase onClick={() => navigate(`/category/${url}`)}>
      <Card className={classes.categoryCard}>
        <img
          alt={title}
          width="120"
          height="120"
          src={image}
          className={classes.categoryMedia}
        />
        <div>
          <Typography variant="body1">{title}</Typography>
        </div>
      </Card>
    </ButtonBase>
  );
};

export default function Home() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const swiperRef = useRef(null);

  return (
    <Page title="MR Store">
      <Swiper
        ref={swiperRef}
        className={classes.mySwiper}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide onClick={() => navigate("/product/product1")}>
          <img src="https://picsum.photos/500/300" alt="Product 1" />
        </SwiperSlide>
        <SwiperSlide onClick={() => navigate("/product/product2")}>
          <img src="https://picsum.photos/500/301" alt="Product 2" />
        </SwiperSlide>
        <SwiperSlide onClick={() => navigate("/product/product3")}>
          <img src="https://picsum.photos/500/302" alt="Product 3" />
        </SwiperSlide>
      </Swiper>

      <div className={classes.topicWrapper}>
        <div className={classes.topicHeader}>
          <Typography variant="h4">Categories</Typography>
          <Button
            color="primary"
            size="small"
            className={classes.showMoreBtn}
            onClick={() => navigate("/categories")}
          >
            Show all
          </Button>
        </div>
        <div className={classes.categoryWrapper}>
          <CategoryItem
            title="Men"
            image="https://picsum.photos/80"
            url="men"
          />
          <CategoryItem
            title="Women"
            image="https://picsum.photos/81"
            url="women"
          />
          <CategoryItem
            title="Kids"
            image="https://picsum.photos/82"
            url="Kids"
          />
          <CategoryItem
            title="Appliances"
            image="https://picsum.photos/83"
            url="appliances"
          />
        </div>
      </div>

      <div className={classes.topicWrapper}>
        <div className={classes.topicHeader}>
          <Typography variant="h4">Best sellers</Typography>
          <Button
            color="primary"
            size="small"
            className={classes.showMoreBtn}
            onClick={() => navigate("/best-sellers")}
          >
            Show all
          </Button>
        </div>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProductCard
              name="Product 1"
              image="https://picsum.photos/200/240"
              slug="product1"
              realPrice="25"
              salePrice="20"
              rating="4.7"
              reviewsCount="109"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProductCard
              name="Product 2"
              image="https://picsum.photos/200/241"
              slug="product2"
              realPrice="35"
              salePrice="25"
              rating="4.8"
              reviewsCount="200"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProductCard
              name="Product 3"
              image="https://picsum.photos/200/242"
              slug="product3"
              realPrice="55"
              salePrice="40"
              rating="4.9"
              reviewsCount="1050"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProductCard
              name="Product 4"
              image="https://picsum.photos/200/243"
              slug="product4"
              realPrice="59"
              salePrice="11"
              rating="4.9"
              reviewsCount="47"
            />
          </Grid>
        </Grid>
      </div>

      <div className={classes.topicWrapper}>
        <div className={classes.topicHeader}>
          <Typography variant="h4">New arrivals</Typography>
          <Button
            color="primary"
            size="small"
            className={classes.showMoreBtn}
            onClick={() => navigate("/new-arrivals")}
          >
            Show all
          </Button>
        </div>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProductCard
              name="Product 1"
              image="https://picsum.photos/200/244"
              slug="product1"
              realPrice="25"
              salePrice="20"
              rating="4.7"
              reviewsCount="109"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProductCard
              name="Product 2"
              image="https://picsum.photos/200/245"
              slug="product2"
              realPrice="35"
              salePrice="25"
              rating="4.8"
              reviewsCount="200"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProductCard
              name="Product 3"
              image="https://picsum.photos/200/246"
              slug="product3"
              realPrice="55"
              salePrice="40"
              rating="4.9"
              reviewsCount="1050"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProductCard
              name="Product 4"
              image="https://picsum.photos/200/247"
              slug="product4"
              realPrice="59"
              salePrice="11"
              rating="4.9"
              reviewsCount="47"
            />
          </Grid>
        </Grid>
      </div>

      <div className={classes.topicWrapper}>
        <div className={classes.topicHeader}>
          <Typography variant="h4">Recommended for you</Typography>
          <Button
            color="primary"
            size="small"
            className={classes.showMoreBtn}
            onClick={() => navigate("/recommended")}
          >
            Show all
          </Button>
        </div>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProductCard
              name="Product 1"
              image="https://picsum.photos/200/248"
              slug="product1"
              realPrice="25"
              salePrice="20"
              rating="4.7"
              reviewsCount="109"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProductCard
              name="Product 2"
              image="https://picsum.photos/200/249"
              slug="product2"
              realPrice="35"
              salePrice="25"
              rating="4.8"
              reviewsCount="200"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProductCard
              name="Product 3"
              image="https://picsum.photos/200/250"
              slug="product3"
              realPrice="55"
              salePrice="40"
              rating="4.9"
              reviewsCount="1050"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <ProductCard
              name="Product 4"
              image="https://picsum.photos/200/251"
              slug="product4"
              realPrice="59"
              salePrice="11"
              rating="4.9"
              reviewsCount="47"
              inWishlist
            />
          </Grid>
        </Grid>
      </div>
    </Page>
  );
}
