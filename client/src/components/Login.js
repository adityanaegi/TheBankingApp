import React, { useState } from "react"
import profile from "../assets/bpfp.png";
import emailpic from "../assets/email.jpg";
import pass from "../assets/pass.png";
import "../styles/Login.css"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { Link } from "react-router-dom"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (event) => {
        event.preventDefault()

        const response = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()
        console.log(data)

        if (data.user) {
            localStorage.setItem('token', data.user)
            window.location.href = '/profile'
        }
        else {
            alert("Incorrect Credentials")
        }
    }

    const google = () => {
        window.open("http://localhost:8000/api/auth/google", "_self");
      };


    return (
        <div>
            <NavBar />
            <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form>
                <p>
                    <label>Email address</label>
                    <br/>
                    <input
                                    type="email"
                                    placeholder="Email"
                                    required={true}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input
                                    type="password"
                                    placeholder="Password"
                                    required={true}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={loginUser}>Login</button>
                </p>
                <p>
                    <button id="sub_btn" type="button" onClick={google}>Login with Google</button>
                </p>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </form>
        </div>
            <Footer />
        </div>

    );
}

export default Login