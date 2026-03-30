import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { loginApi } from "../api/api";

const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleEmail = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (username.trim() == "") return;
        // if (password.trim() == "") return;

        console.log("submit button call");
        try {
            const res = await loginApi(username, password);
            console.log("Login Success:", res);

            // store token
            localStorage.setItem("token", res.token);
            localStorage.setItem("user", JSON.stringify(res.data));

            alert("Login Successful");
            // setError(err.message);

            navigate("/dashboard")
        } catch (err) {
            console.log("error Mesdsage", err.message);
            alert(err.message);

        }
    }

    return (
        <div>
            <div className="card col-md-4 col-12 mx-auto p-4 mt-5">
                <h2 className='mx-auto'>Login</h2>
                <form>
                    <label className='mb-2' htmlFor="username">Username</label><br />
                    <input type="email" name='username' style={{ width: "70%" }} onChange={handleEmail} />
                    <br />
                    <label className='mb-2' htmlFor="email">Password</label><br />
                    <input type="password" style={{ width: "70%" }} onChange={handlePassword} />
                </form>
                <button className='mt-3 w-25 mx-auto' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default LoginPage;