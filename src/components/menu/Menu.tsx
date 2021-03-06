import React from "react";
import clsx from "clsx";
import {createStyles, makeStyles, Theme, useTheme,} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import CloudIcon from "@material-ui/icons/Cloud";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import {Avatar, ListItemIcon, ListItemText} from "@material-ui/core";
import s from "./Menu.module.scss";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Search from "../search/Search";
import Bookmarks from "../bookmarks/Bookmarks";
import {Redirect} from "react-router";

const drawerWidth = 240;


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        appBar: {
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: "none",
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
    })
);

const Menu = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <BrowserRouter basename="">
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Image Finder
                        </Typography>
                        <span className={s.span}>
							{" "}
                            <Avatar src="/broken-image.jpg"/>
						</span>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === "ltr" ? (
                                <ChevronLeftIcon/>
                            ) : (
                                <ChevronRightIcon/>
                            )}
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        <Link to="/search" className={s.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <CloudIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Search"/>
                            </ListItem>
                        </Link>
                        <Link to="/bookmarks" className={s.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <BookmarksIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Bookmarks"/>
                            </ListItem>
                        </Link>
                    </List>
                    <Divider/>
                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader}/>
                </main>
            </div>
            <Route path="/" render={() => <Redirect to={"/search"}/>}/>
            <Route path="/search" render={() => <Search/>}/>
            <Route path="/bookmarks" render={() => <Bookmarks/>}/>

        </BrowserRouter>
    );
};

export default Menu;
