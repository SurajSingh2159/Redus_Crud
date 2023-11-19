import { Navbar, Container } from 'react-bootstrap'

const Header = () => {

  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>React Crud</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header