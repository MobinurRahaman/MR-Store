import { Grid } from "@material-ui/core";
import Page from "../components/Page";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  return (
    <Page title="Wishlist" noWishlistBtn>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={4} md={3} lg={2} spacing={3}>
          <ProductCard
            name="Product 1"
            image="https://picsum.photos/200/240"
            slug="product1"
            realPrice="25"
            salePrice="20"
            rating="4.7"
            reviewsCount="109"
            inWishlist
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} spacing={3}>
          <ProductCard
            name="Product 2"
            image="https://picsum.photos/200/240"
            slug="product2"
            realPrice="35"
            salePrice="25"
            rating="4.8"
            reviewsCount="200"
            inWishlist
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2} spacing={3}>
          <ProductCard
            name="Product 3"
            image="https://picsum.photos/200/240"
            slug="product3"
            realPrice="55"
            salePrice="40"
            rating="4.9"
            reviewsCount="1050"
            inWishlist
          />
        </Grid>
      </Grid>
    </Page>
  );
}
