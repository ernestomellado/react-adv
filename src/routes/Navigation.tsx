import React, { Suspense } from 'react'
import {Routes, Route, Link, BrowserRouter, NavLink, Navigate} from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes'


export default function Navigation() {
  return (
    <Suspense fallback={<span>loading..</span>}>
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <ul>
                <img src={ logo } alt="React Logo"/>
                {
                      routes.map(({to, name, path}) => (
                        <li key ={path}>
                            <NavLink to={to} className={({isActive})=>isActive? 'nav-active': ''}>{name}</NavLink>
                        </li>
                      ))
                }
                </ul>
            </nav>
            <Routes>
            
            {
                routes.map(({path, Component}) => (
                        <Route path={path} element={<Component></Component>}></Route>
                    )) 
            }

                <Route path="/*" element={<Navigate to={routes[0].to} replace />}></Route>
            </Routes>
        </div>
    </BrowserRouter>
    </Suspense>
  )
}
