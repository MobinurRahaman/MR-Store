import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Divider,
  Drawer,
  SwipeableDrawer,
  Hidden,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  IconButton,
  Typography,
  Badge,
} from "@material-ui/core";

import {
  ArrowBack as ArrowBackIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ShoppingCart as ShoppingCartIcon,
  ExpandMore as ExpandMoreIcon,
  Settings as SettingsIcon,
  Receipt as ReceiptIcon,
  Info as InfoIcon,
} from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import categoryBrowser from "../data/categories.json";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  main: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  accordion: {
    border: "none",
    boxShadow: "none",
  },
  list: {
    flex: 1,
  },
  listIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  header: {
    flex: 1,
  },
  centeredTitle: {
    textAlign: "center",
  },
  content: {
    position: "relative",
    width: "100%",
    //height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    //overflow: "auto",
    boxSizing: "border-box",
  },
}));

function Page(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { window } = props;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      {categoryBrowser.map((item1, index) => (
        <Accordion className={classes.accordion} key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionSummary}
          >
            <Avatar
              className={classes.listIcon}
              alt={item1.name}
              src={item1.icon}
            />
            <Typography className={classes.heading}>{item1.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className={classes.list}>
              {item1.categories.map((item2, index2) =>
                item2.url ? (
                  <ListItem
                    button
                    key={index2}
                    onClick={() =>
                      navigate(`/category/${item1.url}/${item2.url}`)
                    }
                  >
                    <ListItemIcon className={classes.listIcon}>
                      <Avatar
                        className={classes.listIcon}
                        alt={item2.name}
                        src={item2.icon}
                      />
                    </ListItemIcon>
                    <ListItemText primary={item2.name} />
                  </ListItem>
                ) : (
                  <Accordion className={classes.accordion} key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${index}_${index2}a-content`}
                      id={`panel${index}_${index2}a-header`}
                      className={classes.accordionSummary}
                    >
                      <Avatar
                        className={classes.listIcon}
                        alt={item2.name}
                        src={item2.icon}
                      />
                      <Typography className={classes.heading}>
                        {item2.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List className={classes.list}>
                        {item2.items.map((item3, index) => (
                          <ListItem
                            button
                            key={index}
                            onClick={() =>
                              navigate(
                                `/category/${
                                  item1.url
                                }/${item2.name.toLowerCase()}/${item3.url}`
                              )
                            }
                          >
                            <ListItemIcon className={classes.listIcon}>
                              <Avatar
                                className={classes.listIcon}
                                alt={item3.name}
                                src={item3.icon}
                              />
                            </ListItemIcon>
                            <ListItemText primary={item3.name} />
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                )
              )}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
      <Divider />
      <List>
        <ListItem button onClick={() => navigate("/settings")}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button onClick={() => navigate("/privacy-policy")}>
          <ListItemIcon>
            <ReceiptIcon />
          </ListItemIcon>
          <ListItemText primary="Privacy policy" />
        </ListItem>
        <ListItem button onClick={() => navigate("/about")}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {props.backBtn && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="go back"
              onClick={() => window.history.back()}
            >
              <ArrowBackIcon />
            </IconButton>
          )}

          {!props.noDrawer && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              className={classes.menuButton}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            noWrap
            variant="h6"
            className={`${classes.header} ${
              props.centeredTitle && classes.centeredTitle
            }`}
          >
            {props.title}
          </Typography>
          <div className={classes.rightBtns}>
            {!props.noRightBtns && (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label=" open search"
                  onClick={() => navigate("/search")}
                >
                  <SearchIcon />
                </IconButton>
                {!props.noWishlistBtn && (
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="go to my wishlist"
                    onClick={() => navigate("/wishlist")}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                )}
                {!props.noCartBtn && (
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="open shopping cart"
                    onClick={() => navigate("/cart")}
                  >
                    <Badge badgeContent={5} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                )}
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {!props.noDrawer && (
        <nav className={classes.drawer} aria-label="category browser">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden mdUp implementation="css">
            <SwipeableDrawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onOpen={handleDrawerToggle}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </SwipeableDrawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      )}
      <main className={classes.main}>
        <div className={classes.toolbar} />
        <div
          className={classes.content}
          style={{ padding: props.noPadding ? 0 : theme.spacing(1) }}
        >
          {props.children}
        </div>
      </main>
    </div>
  );
}

Page.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Page;
