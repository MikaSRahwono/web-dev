import React from 'react'
import { Navbar } from '../../components'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <a href="/" className='home-link'>Mika S. Rahwono</a>
            <Navbar />
        </div>
    )
}

export default Header
