import React from "react";
import registerImg from "../../img/Register.jpg";
import "../../pages/LoginRegister/style.css"
import AnimationButton from "../../Components/Button/AnimationButton";
import {Typography} from "@mui/material";
import '@fontsource/roboto/700.css';

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">
                    <Typography variant="h5" gutterBottom component="div">
                        Register
                    </Typography>
                    </div>
                <div className="content">
                    <div className="image">
                        <img src={registerImg} style={{paddingTop:"1rem"}} alt={"Register.jpg"}/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className={"input"} name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className={"input"} name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" className={"input"} name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <AnimationButton
                        idleText={"Register"}
                    />
                </div>
            </div>
        );
    }
}

export default Register
