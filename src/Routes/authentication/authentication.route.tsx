import { useEffect } from "react"
import { getRedirectResult } from "firebase/auth"
import { 
    auth,
    // signInWithFacebookProvider,
    signInWithGoogleRedirect,
    signInWithGooglePopup, 
    createUserDocFromAuth } 
from "../../utils/firebase/firebase.utils"
import { SignUpForm } from "../../component/signUpForm/signUp-Form.component"
import { SignInForm } from "../../component/signIn-Form/signIn-Form.component"
import "./authentication.route.styles.scss"

export const Authentication = () => {
    // useEffect(() => {
    //     const redirect = async () => {
    //         const response = await getRedirectResult(auth)
    //         if(response) {
    //             const userDocRef = await createUserDocFromAuth(response.user)
    //         }
    //         // console.log(response)
    //     }
    //     redirect()
    // },[])

    // useEffect(() => {
    //     const facebookRedirect = async() => {
    //         const response = await getRedirectResult(auth)
    //         console.log(response)
    //     }
    //     facebookRedirect()
    // }, [])

    return (
        <div className="authentication">
            <h2>Sign In</h2>
             <div className = "authentication-container">
           <SignInForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Googel-Redirect
            </button> */}
            {/* <button onClick = {signInWithFacebookProvider}>
                Sign in With Facebook
            </button> */}
            <SignUpForm />
        </div>
        </div>
       
    )
}