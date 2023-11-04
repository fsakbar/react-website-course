import {useState, useEffect} from 'react'

import {Navbar, Container, Nav} from 'react-bootstrap'
import {navLinks} from '../data/index'
import { NavLink } from 'react-router-dom'

export default function NavBarComponent() {
  // useState disimpan dalam dua variabel yaitu changeColor merupakan tempat pertama menyimpan useState dengan Nilai false, sedangkan setChangeColor Merupakan Function
  const [changeColor, setChangeColor] = useState(false);

  // fungsi berbentuk function expression yang akan dijalankan jika melakukan scrooling
  const changeBackgroundColor = () => {
    if(window.scrollY > 10){
      setChangeColor(true)
    } else {
      setChangeColor(false)
    }
  }

  // Menjalankan Function diatas membutuhkan useEffect
  useEffect(()=>{
    changeBackgroundColor();

    window.addEventListener('scroll', changeBackgroundColor)
  })

  //Lalu Berikan di dalam Return

  return (
    <div>
    <Navbar expand="lg" className={changeColor ? "color-active": ""}>
      <Container>
        <Navbar.Brand href="/" className='fs-3 fw-bold'>CodingWithU.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => {
                return (
                    <div className='nav-link' key={link.id}>
                        <NavLink to={link.path} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end >{link.text}</NavLink>
                    </div>
                )
            })}            
          </Nav>

          <div className='text-center'>
            <button className='btn btn-outline-danger'>Join With Us</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
