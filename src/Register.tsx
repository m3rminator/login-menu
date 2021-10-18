import React, { useState } from "react";
import './App.css';


function About() {

    const [password, setPassword] = useState<string>("");
    const onChangePassword = (event: any) => {
        setPassword(event.target.value);
    };
    const [confirmpassword, setConfirmpassword] = useState<string>("");
    const onChangeConfirmpassword = (event: any) => {
        setConfirmpassword(event.target.value);
    };


    console.log('password=', password)
    console.log('confirmpassword=', confirmpassword)
    console.log('password compare=', password === confirmpassword)

    return (
        <div className='navid-container'>
            <div className='navid-wrapper'>
                <h1 id='h1'>Register</h1>
                <form className='navid-form'>

                    <input type='email' placeholder='your email' id='email-input' ></input>

                    <input type='password' placeholder='your password' id='pass-input' required value={password}
                        onChange={onChangePassword}></input>

                    <input type='password' placeholder='confirm your password' id='confirm-pass-input' required
                        value={confirmpassword} onChange={onChangeConfirmpassword}></input>

                    <input type="submit" placeholder="login" className='login-button' disabled={password !== confirmpassword || password === ""}></input>
                </form>
            </div>
        </div>
    )
}


export default About