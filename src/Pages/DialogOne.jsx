import React from 'react';
import {useLocation} from "react-router-dom";
import {users} from "../Utils/Util";
import DialogItem from "../Components/DialogItem";

function DialogOne(props) {

    const location = useLocation();
    const path = location.pathname.split("/")[2]

    function getUser() {
        let user = users.filter((elem) => elem.id === Number.parseInt(path))[0]
        return user;
    }

    return (
        <div>
            <div className="headDialog">
                <DialogItem id={getUser().id} name={getUser().name}/>
            </div>
        </div>
    );
}

export default DialogOne;