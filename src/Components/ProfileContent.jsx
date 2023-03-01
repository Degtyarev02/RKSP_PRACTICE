import {useMsal} from "@azure/msal-react";
import {useState} from "react";
import {loginRequest} from "../authConfig";
import {ProfileData} from "./ProfileData";
import {callMsGraph} from "../graph";
import Button from "@mui/material/Button";
import {Container} from "@mui/material";
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";

export const ProfileContent = () => {
    const {instance, accounts} = useMsal();
    const [graphData, setGraphData] = useState(null);

    const name = accounts[0] && accounts[0].name;

    function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };
        console.log(request)


        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                callMsGraph(response.accessToken).then(response => setGraphData(response));
            });
        });
    }

    return (
        <Container>
            <Card variant="outlined">
                <CardContent>
                <h5 className="card-title">Welcome {name}</h5>
                {graphData ?
                    <ProfileData graphData={graphData}/>
                    :
                    <Button variant="outlined" onClick={RequestProfileData}>Request Profile Information</Button>
                }
                </CardContent>
            </Card>
        </Container>
    );
}