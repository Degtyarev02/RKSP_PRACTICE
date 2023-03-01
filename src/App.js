import Navbar from "./Components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home"
import JokesCategory from "./Pages/JokesCategory";
import AcceptAgreementForm from "./Pages/AgreementForm";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./Utils/reducers";
import Dialogs from "./Pages/Dialogs";
import DialogOne from "./Pages/DialogOne";

function App() {

    const store = createStore(rootReducer);
    return (
        <Provider store={store}>
            <div className="App">
                <Navbar/>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path={"/category"}>
                            <Route path={":category"} element={<JokesCategory/>}/>
                        </Route>
                        <Route path={"/license"} element={<AcceptAgreementForm/>}/>
                        <Route path={"/dialogs"} element={<Dialogs/>}/>
                        <Route path={"/dialogs"}>
                            <Route path={":id"} element={<DialogOne/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
