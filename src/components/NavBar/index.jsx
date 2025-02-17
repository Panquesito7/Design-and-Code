import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import style from "./style";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import { MenuRounded } from "@material-ui/icons";
import {
  AppBar,
  Container,
  Grid,
  Hidden,
  IconButton,
  Drawer,
  List,
  ListItem,
  // ListItemIcon,
  // ListItemText,
  Divider,
  useScrollTrigger,
  Typography,
} from "@material-ui/core";

//Import Nav Routes Data
import routesData from "../../routes/routesData";

//Importing assets
import brandingLogo from "/assets/branding-logos/branding-transparent-logo.svg";

//Importing Components
import { ContainedButton } from "../Buttons";

import { darkTheme, createMuiTheme } from "../../theme";

import { CloseRounded } from "@material-ui/icons";

const useStyles = makeStyles(style);
function NavBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const { window } = props;
  const [pathname, setPathname] = useState(history.location.pathname),
    [drawerOpen, setDrawerOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  useEffect(() => {
    setPathname(history.location.pathname);
    history.listen(() => {
      setPathname(history.location.pathname);
    });
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        className={classes.appBar}
        style={
          trigger
            ? {
                background:
                  createMuiTheme(darkTheme).palette.primary.backgroundBlurColor,
                backdropFilter: "blur(20px)",
              }
            : {
                background: `transparent`,
                backdropFilter: "none",
              }
        }
      >
        <Container className={classes.navBarBackground} maxWidth="lg">
          <Grid container className={classes.navBar}>
            <Grid container xs={1}>
              <Link to="home">
                <img
                  className={classes.brandingLogo}
                  src={brandingLogo}
                  alt="branding-logo"
                />
              </Link>
            </Grid>
            <Grid container xs={9}>
              <Hidden mdDown>
                <div className={classes.navLinks}>
                  {routesData.map((data, index) => (
                    <div key={`link-index-${index}`}>
                      {data.showOnHeader && (
                        <Link to={data.pageURL}>
                          <Typography
                            className={
                              data.pageURL !== pathname
                                ? classes.navLink
                                : classes.navLinkHighlighted
                            }
                            variant="subtitle1"
                          >
                            {data.pageName}
                          </Typography>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </Hidden>
            </Grid>

            <Grid container xs={2}>
              <div className={classes.joinDiscordBtn}>
                <Hidden mdDown>
                  <ContainedButton
                    href="https://discord.gg/gM3bG4rAU5"
                    target="_blank"
                  >
                    Join Us
                  </ContainedButton>
                </Hidden>
                <Hidden lgUp>
                  <IconButton
                    className={classes.menuBtn}
                    onClick={() => setDrawerOpen(!drawerOpen)}
                  >
                    <MenuRounded />
                  </IconButton>
                </Hidden>
              </div>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <Drawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List className={classes.mobileNav}>
          <ListItem>
            <Typography
              className={classes.closeIcon}
              onClick={() => setDrawerOpen(false)}
            >
              <CloseRounded />
            </Typography>
          </ListItem>
          <ListItem>
            <div className={classes.branding}>
              <div className={classes.brandingLogoSidebar}>
                <img src={brandingLogo} alt="branding-logo" />
              </div>
              <div className={classes.brandingInfo}>
                <Typography variant="h4" className={classes.brandingTitle}>
                  Design And Code
                </Typography>
                <Typography
                  variant="subtitle2"
                  className={classes.brandingDesc}
                >
                  Connect, Collaborate, Comprehend
                </Typography>
              </div>
            </div>
          </ListItem>
          {routesData.map((data, index) => (
            <React.Fragment
              key={data.pageName}
            >
              {data.showOnHeader && (
                <>
                  <Link
                    key={data.pageName}
                    to={data.pageURL} 
                    onClick={() => setDrawerOpen(false)}>
                    <ListItem
                      button
                      focusVisible={false}
                      className={
                        data.pageURL !== pathname
                          ? classes.listItem
                          : classes.listItemHighlighted
                      }
                    >
                      <Typography className={classes.listItemIcon}>
                        {data.icon}
                      </Typography>
                      <Typography variant="subtitle1">
                        {data.pageName}
                      </Typography>
                    </ListItem>
                  </Link>
                  <Divider className={classes.divider} />
                </>
              )}
            </React.Fragment>
          ))}
          <ListItem>
            <ContainedButton
              href="https://discord.gg/gM3bG4rAU5"
              target="_blank"
              className={classes.mobileJoinDiscordBtn}
              width="100%"
            >
              <Typography variant="h6">Join Discord</Typography>
            </ContainedButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
