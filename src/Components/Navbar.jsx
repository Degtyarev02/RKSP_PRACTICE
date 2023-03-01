import React from 'react';
import "../index.css"

function Navbar(props) {
    return (
        <div className={"Navbar"}>
            <a href="/"><span className={"Logo"}>Анекдоты МИРЭА</span></a>
            <ul className={"Navbar_Control"}>
                <li><a href="">Смешные анекдоты</a></li>
                <li><a href="">Несмешные анекдоты</a></li>
                <li><a href="">Тоже несмешные анекдоты</a></li>
                <li><a href="/license">License agreement</a></li>
                <li><a href="/dialogs">Диалоги о вечном</a></li>
            </ul>
        </div>
    );
}

export default Navbar;