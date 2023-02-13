import React from 'react';
import Jokes from "../Components/Jokes";
import {miscellanea, wolf, stirlitz} from "../Utils/Util";
import {useLocation} from "react-router-dom";

function JokesCategory(props) {
    const type = useLocation().pathname.split("/")[2]

    let list;
    type === "miscellanea" ? list = miscellanea :
        type === "wolf" ? list = wolf :
            list = stirlitz

    return (
        <div><Jokes list={list}/></div>
    );
}

export default JokesCategory;