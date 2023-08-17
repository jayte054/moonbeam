import { Link, Outlet } from "react-router-dom"
import { RxMoon } from "react-icons/rx"
import "./navbar.routes.scss"
import { Fragment, useContext } from "react"
import { UserContext } from "../../context/user.context"
import { CartContext } from "../../context/cart-context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { CartIcon } from "../../component/cart-icon/cart-icon.component"
import { CartDropdown } from "../../component/cart-dropdown/cart-dropdown.component"

export const Navbar = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext<any>(CartContext)

    const signOutHandler = async() => {
        await signOutUser()
    }
    
    return (
        <Fragment>
            <div className="nav-container">
                <Link className="logo-container" to="/">
                <RxMoon style={{fontSize:"50px"}}/>
                </Link>
            <div className="nav-link-container">
            <Link className="nav-blog" to="/shop">
                    Shop
                </Link>
                <Link className="nav-blog" to ="/blog">
                    Blog
                </Link>
                {currentUser ? (
                    <span className="nav-signin" onClick={signOutHandler}>Sign Out</span>
                ): (
                <Link className = "nav-signin" to = "/auth">
                    Sign In
                </Link>
                )}
                <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />    
        </Fragment>
    )
}