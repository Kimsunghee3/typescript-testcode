import { Routes, Route } from "react-router-dom"
import { BtnStyle, LoginStyle } from "../layout"
export const AppRouter = () => {

    return(
        <>
            <Routes>
                <Route path="/button" element={<BtnStyle/>} />
                <Route path="/lgheader" element={<LoginStyle/>} />
            </Routes>
        </>
    )
}