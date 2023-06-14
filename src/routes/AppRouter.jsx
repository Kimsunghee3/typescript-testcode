import { Routes, Route } from "react-router-dom"
import { LoginHeader } from "../pages"
import { BtnStyle,  } from "../layout"
export const AppRouter = () => {

    return(
        <>
            <Routes>
                <Route path="/button" element={<BtnStyle/>} />
                <Route path="/lgheader" element={<LoginHeader/>} />
            </Routes>
        </>
    )
}