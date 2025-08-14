import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <SearchBar />
            <Outlet />
        </>
    );
};

export default RootLayout;
