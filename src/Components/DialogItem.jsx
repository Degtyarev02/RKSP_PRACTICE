import React from 'react';
import {Link} from "react-router-dom";

function DialogItem(props) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={"DialogItem"}>
            <span>{props.id}</span>
            <img className={"Avatar"} src="https://image.cnbcfm.com/api/v1/image/103978904-The_meme_formerly_known_as_Kuk_1.png?v=1475149183" alt=""/>
            <Link to={path}>{props.name}</Link>
        </div>)
}

export default DialogItem;