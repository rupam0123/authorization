import { Container, Nav, Navbar } from "react-bootstrap";


export default function Header(){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Nav className="me-auto">
          {
            localStorage.getItem('token')?
            <>
            <Nav.Link href="/product">Products</Nav.Link>
            <Nav.Link href="/locations">Locations</Nav.Link>
            <Nav.Link href="/families">Families</Nav.Link>
            <Nav.Link href="/transactions">Transactions</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
            </>:
            <>
            <Nav.Link href="/registration">Registration</Nav.Link>
            <Nav.Link href="/login">login</Nav.Link>
            </>
          }
        </Nav>
        </Container>
      </Navbar> 
    )
}