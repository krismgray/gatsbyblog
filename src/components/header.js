import React from 'react'
import Link from 'gatsby-link'
import { Container, Menu } from 'semantic-ui-react'

const Header = ({ history: { location: { pathname } } }) => (
  <Menu>
    <Container>
      <Menu.Item
        as={Link}
        to='/'
        active={pathname === '/'}
      >
        Kris Gray
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item
          as={Link}
          to='/about'
          active={pathname === '/about'}
        >
          About
        </Menu.Item>

        <Menu.Item
          as={Link}
          to='/projects'
          active={pathname === '/projects'}
        >
          Projects
        </Menu.Item>

        <Menu.Item
          as={Link}
          to='/resume'
          active={pathname === '/resume'}
        >
          Resume
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default Header
