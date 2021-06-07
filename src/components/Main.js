import React from 'react'
import FMLogo from "../assets/Component_1.png"
import "./main.css"

const Main = () => {
    return (
        <span>
            <div class="split left">
                <div class="centered">
                    <span className="LOGO_FM">
                    <img src={FMLogo} alt ="gambar gaada tot" />
                    </span>
                    <span className="InfoText">
                        FINDMATES is an online third party website dedicated<br />
                        to help gamers find teamates, and maybe a soulmate too.
                    </span>
                </div>
            </div>
            <span> p</span>
            <div class="split right">
                <div class="centered2">
                    <div className="LoginPop">
                        <h1>SIGN IN</h1>
                        <form method="post">
                            <div class="txt_field">
                                <input type="text" required />
                                <span></span>
                                <label>username</label>
                            </div>
                            <div class="txt_field">
                                <input type="password" required />
                                <span></span>
                                <label>password</label> 
                            </div>
                            <div class="pass">Don't have an account?</div>
                            <input type="image" src="https://i.ibb.co/M8bpJzM/Component-2.png" alt="submit"></input>
                        </form>
                    </div>
                </div>
            </div>
        </span>
    )
}

export default Main
