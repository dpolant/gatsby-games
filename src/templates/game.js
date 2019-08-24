import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"

const GameTemplate = ({title}) => (
  <>
    <h1>{title}</h1>
    <div>Lorem ipsum</div>
  </>
)

const Game = ({data}) => {
  const {markdownRemark: game} = data

  return (
    <Layout>
      <GameTemplate title={game.frontmatter.title} />
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
      }
    }
  }
`
