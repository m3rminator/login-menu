import React from "react";
import './App.css';

function Form() {
    return (
        <div className='navid-container'>
            <div className='navid-wrapper'>
                <h1 id='h1'>Login</h1>
                <form className='navid-form'>
                    <input type='email' placeholder='your email' id='email-input' required></input>
                    <input type='password' placeholder='your password' id='pass-input' required></input>
                    <input type="submit" placeholder="login" className='login-button' value='login'></input>
                </form>
            </div>
        </div>
    )
}


export default Form