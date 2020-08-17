import React from 'react';
import classes from './Banner.module.css';
import BackgroundSection from '../BGImage/BGImage';
import { useStaticQuery, graphql } from "gatsby";

const Banner = () => {
    const data = useStaticQuery(
        graphql `
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    )
    
    return (
      <BackgroundSection className={classes.banner}>
          <div className = {classes.scWrapper}>
              <h1 className={classes.title}>{data.site.siteMetadata.title}</h1>
              <p className={classes.role}>Frontend Web Developer</p>
          </div>
      </BackgroundSection>
    )
}

export default Banner;