import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import {Link} from "gatsby"
import Container from "@material-ui/core/Container"

export default class Appbar extends React.Component {
  constructor() {
    super()
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open})

  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Container>
              <IconButton edge="start" color="inherit" aria-label="Open drawer">
                <MenuIcon onClick={this.handleToggle} />
              </IconButton>
              GATSBY GAMES
            </Container>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.handleToggle}>
          <List>
            <ListItem>
              <ListItemText primary={<Link to="/">Home</Link>} />
            </ListItem>
            <ListItem>
              <ListItemText primary={<Link to="/builds">Builds</Link>} />
            </ListItem>
            <ListItem>
              <ListItemText primary={<Link to="/blog">Blog</Link>} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<Link to="/piecetypes">Lego organization guide</Link>}
              />
            </ListItem>
          </List>
        </Drawer>
      </>
    )
  }
}
