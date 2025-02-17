import React from "react";

import style from "./style";
import { Link } from "react-router-dom";

import routesData from "../../routes/routesData";

//Importing components
import { ContainedButton } from "../Buttons";

//Importing Material UI stuff
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Divider,
  Hidden,
  Typography,
} from "@material-ui/core";

//Importing assets
import brandingLogo from "/assets/branding-logos/branding-transparent-logo.svg";
import emailIcon from "/assets/social-icons/BgEmailIcon.svg";
import twitterIcon from "/assets/social-icons/BgTwitterIcon.svg";
import linkedinIcon from "/assets/social-icons/BgLinkedinIcon.svg";
import instagramIcon from "/assets/social-icons/BgInstagramIcon.svg";
import githubIcon from "/assets/social-icons/BgGithubIcon.svg";
import youtubeIcon from "/assets/social-icons/BgYouTubeIcon.svg";

const useStyles = makeStyles(style);
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footerBackground}>
      <Container maxWidth="lg">
        <Grid container className={classes.footerContent}>
          <Grid item>
            <div className={classes.branding}>
              <img
                src={brandingLogo}
                className={classes.brandingLogo}
                alt="branding-logo"
              />
              <div className={classes.brandingInfo}>
                <Typography variant="h4" className={classes.brandingTitle}>
                  Design And Code
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.brandingDesc}
                >
                  Connect, Collaborate, Comprehend
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item className={classes.footerSectionGrid}>
            <Grid container className={classes.footerSectionContainer}>
              {routesData.map((data, index) => {
                return (
                  data.showOnHeader && (
                    <div key={`link-index-${index}`}>
                      <Link to={data.pageURL}>
                        <Typography
                          variant="subtitle1"
                          className={`${classes.footerSectionTitle} ${
                            index !== routesData.length - 1 &&
                            classes.footerSectionBorder
                          }`}
                        >
                          {data.pageName}
                        </Typography>
                      </Link>
                    </div>
                  )
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container className={classes.footerEnd}>
          <Grid md={6}>
            <div className={classes.socialLinks}>
              <a href="mailto:designandcode.community@gmail.com">
                <img src={emailIcon} alt="Email icon" />
              </a>
              <a
                href="https://twitter.com/DesignandCode3"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitterIcon} alt="Twitter icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/designandcode/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="Linkedin icon" />
              </a>
              <a
                href="https://www.instagram.com/designandcode.community/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagramIcon} alt="Instagram icon" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCd4E0oe8MtnZu_48WvYeLMw?sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtubeIcon} alt="YouTube icon" />
              </a>
              <a
                href="https://github.com/Design-and-Code"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub icon" />
              </a>
            </div>
          </Grid>
          <Hidden smDown>
            <Grid md={6} xs={2}>
              <Typography variant="subtitle1" className={classes.joinUsBtn}>
                <ContainedButton
                  size="large"
                  href="https://discord.gg/gM3bG4rAU5"
                  target="_blank"
                >
                  JOIN US
                </ContainedButton>
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
        <Grid>
          <Typography variant="subtitle1" className={classes.footerLinks}>
            @Copyright {new Date().getFullYear()}. All rights reserved.
          </Typography>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
