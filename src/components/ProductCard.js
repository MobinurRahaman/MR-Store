import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
  Star as StarIcon,
  AddShoppingCart as AddShoppingCartIcon,
} from "@material-ui/icons";

const useStyles = makeStyles({
  media: {
    height: 240,
  },
  cardContent: {
    padding: "0 5px",
  },
  productName: {
    textAlign: "center",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: "3em",
  },
  realPrice: {
    color: "#f00",
  },
  salePrice: {
    color: "#00f",
  },
  discount: {
    color: "#0f0",
  },
  ratingsReviews: {
    display: "flex",
    alignItems: "center",
    marginBottom: 5,
  },
  starIcon: {
    transform: "scale(.7)",
  },
  addToWishlistBtn: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  addToCartBtn: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

export default function ProductCard({
  name,
  image,
  slug = "",
  realPrice,
  salePrice,
  discount,
  rating,
  reviewsCount,
  inWishlist,
}) {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card style={{ position: "relative" }}>
      <CardActionArea onClick={() => navigate(`/product/${slug}`)}>
        <CardMedia className={classes.media} alt={name} image={image} />
        <CardContent className={classes.cardContent}>
          <Typography variant="body1" className={classes.productName}>
            {name}
          </Typography>

          {realPrice && <del className={classes.realPrice}>${realPrice}</del>}
          <span className={classes.salePrice}> ${salePrice}</span>
          {realPrice && (
            <span className={classes.discount}>
              {" "}
              ({(((realPrice - salePrice) / realPrice) * 100).toFixed(2)}% off)
            </span>
          )}
          <div className={classes.ratingsReviews}>
            {rating && (
              <>
                <StarIcon className={classes.starIcon} />
                <span className={classes.rating}>{rating}</span>
              </>
            )}
            {reviewsCount && (
              <span className={classes.rating}> ({reviewsCount})</span>
            )}
          </div>
        </CardContent>
      </CardActionArea>

      <IconButton
        edge="start"
        color="primary"
        aria-label="add to wishlist"
        className={classes.addToWishlistBtn}
        onClick={() => {}}
      >
        {inWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <IconButton
        edge="start"
        color="primary"
        aria-label="add to cart"
        className={classes.addToCartBtn}
        onClick={() => {}}
      >
        <AddShoppingCartIcon />
      </IconButton>
    </Card>
  );
}
