import React from "react"
import Container from "@material-ui/core/Container"

const Footer = () => (
  <Container>
    <footer style={{marginTop: 50, marginBottom: 50}}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Container>
)

export default Footer
