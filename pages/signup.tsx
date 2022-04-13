import AuthForm from "../components/authForm";

const Signup = () => {
    return (
        <AuthForm mode="signup" />
    )
};

Signup.authPage = true //nifty next.js feature for more control

export default Signup;