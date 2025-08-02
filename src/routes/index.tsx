import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import RootLayout from "../pages/Layout";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";


const router = createBrowserRouter(

    createRoutesFromElements(
        <>
            {/* Root Layout */}
            <Route>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<HomePage />} />
                    {/* <Route path="about" element={<AboutPage />} /> */}
                </Route>
                <Route
                    path="/login"
                    element={<LoginPage />}
                />
            </Route>
        </>
    )
);

export default router;
