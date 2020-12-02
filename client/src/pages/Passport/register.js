
import React, {useState}from "react";

function Login() {
const [password, setPassword] = useState({})

function handleInputChange(event) {
    const { name, value } = event.target;
    setPassword({...password, [name]: value})
};
function handleFormSubmit(event) {
    event.preventDefault();
    if (password.username && password.password) {
        console.log("soop")
    }
};

return(
<div><h1>Register</h1>
username
<input 
    onChange={handleInputChange}
    name="username"
/>
<br/>

password
<input
    onChange={handleInputChange}
    name="password"/>
    <br/>
<button
    disabled={!(password.username && password.password)}
    onClick={handleFormSubmit}>Submit</button>
</div>
)

}
export default Login