import React from 'react';

function Jokes(props) {
    return (
        <ul className={"JokesList"}>
            {props.list.map((joke, index) => (
                <li key={index}>
                    <span>{joke}</span>
                </li>
            ))}
        </ul>
    );
}

export default Jokes;