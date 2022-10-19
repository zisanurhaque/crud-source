import React from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Homepage from "./Component/Homepage";

class App extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <Homepage/>
                <Footer/>
            </>
        )
    }
}

export default App;