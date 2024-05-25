import React from 'react'
import {Routes, Route, Link, BrowserRouter, NavLink, Navigate} from 'react-router-dom'
import logo from '../logo.svg'

export default function Navigation() {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ logo } alt="React Logo"/>
           
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
            </ul>
            </nav>
            <Routes>
                <Route path="/home" element={<h1>home page</h1>}></Route>
                <Route path="/about" element={<h1>About page</h1>}></Route>
                <Route path="/users" element={<h1>Users page</h1>}></Route>
                <Route path="/*" element={<Navigate to="/home" replace />}></Route>
            </Routes>
        </div>
    </BrowserRouter>
  )
}
