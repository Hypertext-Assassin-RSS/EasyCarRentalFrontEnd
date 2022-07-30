import React from "react";
import loginImg from "../../img/Login.jpg";
import "../../pages/LoginRegister/style.css"
import AnimationButton from "../../Components/Button/AnimationButton";
import {Typography} from "@mui/material";
import '@fontsource/roboto/700.css';

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">
                    <Typography variant="h5" style={{top:'7rem'}} gutterBottom component="div">
                        Login
                    </Typography>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg}  alt={'login.jpg'}/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className={"input"} name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className={"input"} name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <AnimationButton
                        idleText={"Login"}
                    />
                </div>
            </div>
        );
    }
}

export default Login
