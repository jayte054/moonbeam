import { useState, useContext } from "react";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/form-input.component";
import "./signIn-Form.component.styles.scss";
import { Button } from "../button/button.component";
import { UserContext } from "../../context/user.context";
const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormfields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const {setCurrentUser} = useContext(UserContext)

  const resetFormFields = () => {
    setFormfields(defaultFormFields);
  };
  const googleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const {user}: any = await signInAuthWithEmailAndPassword(email, password);
      setCurrentUser(user)
      resetFormFields();
    } catch (error) {}
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormfields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Please Sign in</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={googleSignIn}>
            Google Sign-In
          </Button>
        </div>
      </form>
    </div>
  );
};
