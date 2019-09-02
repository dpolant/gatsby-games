import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Img from "../components/PreviewCompatibleImage"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

const GameTemplate = ({title, image}) => (
  <>
    <Img imageInfo={{image, alt: "alt text"}} />
    <Container maxWidth="sm">
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">Lorem ipsum</Typography>
    </Container>
  </>
)

const Game = ({data}) => {
  const {markdownRemark: game} = data

  return (
    <Layout>
      <GameTemplate
        title={game.frontmatter.title}
        image={game.frontmatter.image}
      />
    </Layout>
  )
}

export default Game

export const pageQuery = graphql`
  query gameById($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
