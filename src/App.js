import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"
import MiProvider from "./components/CartContext"


function App () {
    return (
        <MiProvider>
            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
            </BrowserRouter>
        </MiProvider>
    )
}

export default App