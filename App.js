import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Component/Header";
import Routes from './Component/Routes';
import "./style.scss";
class App extends React.Component{
    render(){
        return(
            <>
                <BrowserRouter>
                    <Header/>
                    <Routes/>
                </BrowserRouter>
            </>
        )
    }
}
export default App;