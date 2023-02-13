import React from 'react';
import "../index.css"

function Home(props) {
    return (
        <div className={"HomeContainer"}>
            <h1 className={"HomeBanner"}>Добро пожаловать <br/> в мир кринжа!</h1>
            <ul className={"HomeUlLinks"}>
                <li><a href={"/category/miscellanea"}>Разное | </a></li>
                <li><a href={"/category/stirlitz"}>Штирлиц | </a></li>
                <li><a href={"/category/wolf"}>Волк и звери</a></li>
            </ul>
        </div>
    );
}

export default Home;