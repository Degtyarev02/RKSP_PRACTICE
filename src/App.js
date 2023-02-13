import Navbar from "./Components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home"
import JokesCategory from "./Pages/JokesCategory";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={"category"}>
                        <Route path={":category"} element={<JokesCategory/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
