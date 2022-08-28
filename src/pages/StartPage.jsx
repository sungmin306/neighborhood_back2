import React from "react";
import BoardInfo from "../components/BoardInfo/BoardInfo";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const StartPage = () => {
        return (
        <div>
        <BoardInfo />
        <div className="nav-box">
                <Link to="/login">
                <nav className="nav1">로그인</nav>
                </Link>
                <Link to="/signup">
                <nav className="nav2">회원가입</nav>
                </Link>
        </div>
        <img className="log-img" src={logo}></img>
        </div>
        );
};

export default StartPage;