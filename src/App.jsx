import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pantalones from './Pantalones.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Mi Aplicación</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#remeras">Remeras</Nav.Link>
            <Nav.Link href="#camisas">Camisas</Nav.Link>
            <Nav.Link href="#pantalones">Pantalones</Nav.Link>
            <Nav.Link href="#accesorios">Accesorios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Pantalones />
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


export default App

