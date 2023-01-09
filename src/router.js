import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Home from "./pages/home"
import Dash from "./pages/dash"
import About from "./pages/about"
import Stock from "./pages/stock"
import { stockLoader } from "./loaders"
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route path="/stocks" element={<Dash/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/stocks/:symbol" element={<Stock/>} loader={stockLoader}/>
        </Route>
    )
)


export default router 