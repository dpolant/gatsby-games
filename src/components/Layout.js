import React from "react"
import {Helmet} from "react-helmet"
import Footer from "../components/Footer"
import Navbar from "./Navbar/Navbar"
import useSiteMetadata from "./SiteMetadata"
import CssBaseline from "@material-ui/core/CssBaseline"
import {createMuiTheme} from "@material-ui/core/styles"
import {ThemeProvider} from "@material-ui/styles"
import purple from "@material-ui/core/colors/purple"
import green from "@material-ui/core/colors/green"
import "typeface-roboto"
import {withPrefix} from "gatsby"

const defaultTheme = createMuiTheme()
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  overrides: {
    MuiContainer: {
      maxWidthSm: {
        [defaultTheme.breakpoints.up("sm")]: {
          maxWidth: 1000,
        },
      },
    },
    MuiTypography: {
      body1: {
        fontFamily: "Rokkitt",
        fontSize: "1.5em",
      },
    },
  },
})

const TemplateWrapper = ({children}) => {
  const {title, description} = useSiteMetadata()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Rokkitt&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </ThemeProvider>
  )
}

export default TemplateWrapper
