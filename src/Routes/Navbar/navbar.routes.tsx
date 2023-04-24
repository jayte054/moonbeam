import { Link, Outlet } from "react-router-dom"
import { RxMoon } from "react-icons/rx"
import "./navbar.routes.scss"
import { Fragment, useContext } from "react"
import { UserContext } from "../../context/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"

export const Navbar = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext)

    const signOutHandler = async() => {
        await signOutUser()
        setCurrentUser(null)
    }
    
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
                {currentUser ? (
                    <span className="nav-signin" onClick={signOutHandler}>Sign Out</span>
                ): (
                <Link className = "nav-signin" to = "/auth">
                    Sign In
                </Link>
                )

                }
               
                </div>
            </div>
            <Outlet />    
        </Fragment>
    )
}