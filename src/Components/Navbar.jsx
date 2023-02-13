import React from 'react';
import "../index.css"

function Navbar(props) {
    return (
        <div className={"Navbar"}>
            <span className={"Logo"}>Анекдоты МИРЭА</span>
            <ul className={"Navbar_Control"}>
                <li><a href="">Смешные анекдоты</a></li>
                <li><a href="">Несмешные анекдоты</a></li>
                <li><a href="">Тоже несмешные анекдоты</a></li>
            </ul>
        </div>
    );
}

export default Navbar;