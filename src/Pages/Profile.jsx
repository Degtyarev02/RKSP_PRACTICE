import React from 'react';
import {ProfileContent} from "../Components/ProfileContent";
import {AuthenticatedTemplate} from "@azure/msal-react";

function Profile(props) {
    return (
        <AuthenticatedTemplate>
            <ProfileContent/>
        </AuthenticatedTemplate>
    );
}

export default Profile;