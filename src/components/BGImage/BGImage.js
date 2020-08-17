import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = (props) => (
    <StaticQuery
        query={graphql`
            query {
                desktop: file(relativePath: { eq: "beach.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        return (
            <BackgroundImage
                Tag="div"
                className={props.className}
                fluid={imageData}
            >
                {props.children}
            </BackgroundImage>
        )
        }}
    />
)

export default BackgroundSection;