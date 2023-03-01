import React from 'react';
import DialogItem from "../Components/DialogItem";
import {users} from "../Utils/Util";

function Dialogs(props) {
    let user = users

    return (
        <div>
            {user.map((elem, index) => (
                <DialogItem key={index} name={elem.name} id={elem.id}/>
            ))}
        </div>
    );
}

export default Dialogs;