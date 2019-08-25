import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Img from "../components/PreviewCompatibleImage"

const GameTemplate = ({title, image}) => (
  <>
    <h1>{title}</h1>
    <Img imageInfo={{image, alt: "alt text"}} />
    <div>Lorem ipsum</div>
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
