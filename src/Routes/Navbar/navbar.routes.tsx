import { Link, Outlet } from "react-router-dom"
import { RxMoon } from "react-icons/rx"
import "./navbar.routes.scss"
import { Fragment } from "react"

export const Navbar = () => {
    return (
        <Fragment>
            <div className="nav-container">
                <Link className="logo-container" to="/">
                <RxMoon style={{fontSize:"50px"}}/>
                </Link>
            <div className="nav-link-container">
                <Link className="nav-blog" to ="/blog">
                    Blog
                </Link>
                <Link className = "nav-signin" to = "/auth">
                    Sign In
                </Link>
                </div>
            </div>
            <Outlet />    
        </Fragment>
    )
}