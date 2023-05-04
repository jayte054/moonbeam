import {  useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils"
import  {FormInput}  from "../form-input/form-input.component" 
import "./signUp-Form.component.styles.scss"
import { Button } from "../button/button.component"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}


export const SignUpForm = () => {
    const [formFields, setFormfields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields


    const resetFormFields = () => {
        setFormfields(defaultFormFields)
    }

    const handleSubmit = async(event: any) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("paswords do not match")
            return;
        }
        try{
        const {user}: any = await createAuthUserWithEmailAndPassword(email, password)

        await createUserDocFromAuth(user, {displayName})
            resetFormFields()
        }catch(error) {
            if(error === "auth/email-already-in-use") {
                alert("email already in use")
            }
            console.log(error)
        }

    }

    console.log(formFields)
    const handleChange = (event: any) => {
        const {name, value} = event.target
        setFormfields({...formFields, [name]: value})
    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>please sign up</span>
            <form onSubmit = {handleSubmit}>
                <FormInput 
                label = "Display Name"
                type ="text" 
                name="displayName" 
                value={displayName} 
                onChange = {handleChange}
                required/>
                <FormInput 
                label ="Email"
                type ="email" 
                name = "email" 
                value={email} 
                onChange = {handleChange}
                required/>
                <FormInput 
                label = "Password"
                type="password" 
                name = "password" 
                value={password} 
                onChange = {handleChange}
                required/>
                <FormInput 
                label = "Confirm Password"
                type="password" 
                name="confirmPassword" 
                value={confirmPassword} 
                onChange = {handleChange}
                required/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}