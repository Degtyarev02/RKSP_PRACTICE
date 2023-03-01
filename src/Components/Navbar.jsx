import React from 'react';
import "../index.css"
import {AuthenticatedTemplate, useIsAuthenticated} from "@azure/msal-react";
import {SignOutButton} from "./SignOutButton";
import {SignInButton} from "./SignInButton";

function Navbar(props) {
    const isAuthenticated = useIsAuthenticated();

    return (
        <div className={"Navbar"}>
            <a href="/"><span className={"Logo"}>Анекдоты МИРЭА</span></a>
            <ul className={"Navbar_Control"}>
                <li><a href="">Смешные анекдоты</a></li>
                <li><a href="">Несмешные анекдоты</a></li>
                <li><a href="">Тоже несмешные анекдоты</a></li>
                <AuthenticatedTemplate>
                    <li><a href="/license">License agreement</a></li>
                    <li><a href="/dialogs">Диалоги о вечном</a></li>
                    <li><a href="/profile">Профиль</a></li>
                </AuthenticatedTemplate>
            </ul>
            {isAuthenticated ? <SignOutButton/> : <SignInButton/>}
        </div>
    );
}

export default Navbar;